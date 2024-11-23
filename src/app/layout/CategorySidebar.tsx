"use client";
import CategoryAccordionItem from "@/components/CategoryAccordionItem";
import CategorySkeleton from "@/components/skeleton/CategorySkeleton";
import { AccordionRoot } from "@/components/ui/accordion";
import { InputGroup } from "@/components/ui/input-group";
import { TCategory, TDua, TSubCategory } from "@/types";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";

const CategorySidebar = () => {
  const queryParams = useSearchParams();
  const categoryId = queryParams.get("cat");
  const subCategoryId = queryParams.get("subcat");
  const [activeItems, setActiveItems] = useState<string[]>([categoryId!]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TCategory[] | []>([]);
  const [subCatLoading, setSubCatLoading] = useState(false);
  const apiBaseUrl = "https://dua-server-5n6u.onrender.com/api";

  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat") as string;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiBaseUrl}/categories`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.log(err);
        return setLoading(true);
      });
    setLoading(false);
  }, []);

  // fetch subcategories
  const [subCategories, setSubCategories] = useState<TSubCategory[] | []>([]);

  useEffect(() => {
    setSubCatLoading(true);
    axios
      .get(`${apiBaseUrl}/subcategories`, {
        params: { cat: Number(cat) },
      })
      .then((response) => setSubCategories(response.data))
      .catch((err) => {
        console.log(err);
        return;
      })
      .finally(() => setSubCatLoading(false));
  }, [cat]);

  // fetch duas
  const [duaTitles, setDuaTitles] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/dua-titles`, {
        params: { cat: categoryId },
      })
      .then((response) => setDuaTitles(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  // filter dua titles
  const filteredDuaTitles = duaTitles.filter(
    (item: Pick<TDua, "dua_name_en" | "id" | "subcat_id">) =>
      item.subcat_id === Number(subCategoryId)
  );

  return (
    <Suspense fallback={<p></p>}>
      <div>
        <div className="sm:w-[350px] w-full md:h-[85vh] h-[100vh] rounded-xl bg-white">
          <div>
            <div className="py-4 bg-primary sm:text-center text-left sm:px-0 px-5 text-white sm:rounded-t-xl">
              <h4 className="text-base">Categories</h4>
            </div>
            {/* search bar */}
            <div className="p-3">
              <InputGroup
                gap={12}
                className="w-full h-[45px] bg-white rounded-[7px]"
                startElement={
                  <GrSearch
                    className="cursor-pointer text-lightBlack"
                    size={18}
                  />
                }
              >
                <Input
                  className="w-full h-full pl-6 border rounded-[7px] focus-within:outline-primary"
                  placeholder="Search categories"
                />
              </InputGroup>
            </div>
          </div>

          {/* category accordion */}
          <div className="px-3 overflow-y-scroll h-[79%] sideBar space-y-1">
            {loading || data?.length === 0 ? (
              <div className="space-y-1 py-1 px-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <CategorySkeleton key={item} />
                ))}
              </div>
            ) : (
              <AccordionRoot
                onValueChange={({ value }) => setActiveItems(value)}
                collapsible
                defaultValue={[categoryId!]}
              >
                {data?.map((item, index) => (
                  <CategoryAccordionItem
                    duaTitles={filteredDuaTitles}
                    subCatLoading={subCatLoading}
                    subCategories={subCategories}
                    activeItems={activeItems}
                    item={item}
                    key={index}
                  />
                ))}
              </AccordionRoot>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default CategorySidebar;
