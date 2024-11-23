import { Accordion, AccordionRoot } from "@chakra-ui/react";
import SubCategoryAccordionItem from "./SubCategoryAccordionItem";
import CategoryItem from "./CategoryItem";
import { useState } from "react";
import { TCategory, TDua, TSubCategory } from "@/types";
const CategoryAccordionItem = ({
  item,
  activeItems,
  subCategories,
  subCatLoading,
  duaTitles,
}: {
  item: TCategory;
  activeItems: string[];
  subCategories: TSubCategory[];
  subCatLoading: boolean;
  duaTitles: Pick<TDua, "dua_name_en" | "id" | "subcat_id">[];
}) => {
  const [subCategoryActiveItems, setSubCategoryActiveItems] = useState<
    string[]
  >([]);

  return (
    <Accordion.Item value={item.id.toString()}>
      <Accordion.ItemTrigger>
        <CategoryItem item={item} activeItems={activeItems} />
      </Accordion.ItemTrigger>
      <Accordion.ItemContent className="py-2 px-1">
        {/* render sub category here */}
        <div className="pl-4 ml-8 border-l-2 border-dotted border-primary">
          {subCatLoading ? (
            ""
          ) : subCategories?.length === 0 ? (
            <p className="text-sm text-lightBlack">No data</p>
          ) : (
            <AccordionRoot
              onValueChange={({ value }) => setSubCategoryActiveItems(value)}
              collapsible
            >
              {subCategories?.map((item, index) => (
                <SubCategoryAccordionItem
                  duaTitles={duaTitles}
                  activeItems={subCategoryActiveItems}
                  item={item}
                  key={index}
                />
              ))}
            </AccordionRoot>
          )}
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  );
};

export default CategoryAccordionItem;
