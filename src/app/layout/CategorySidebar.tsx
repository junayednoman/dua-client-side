import CategoryItem from "@/components/CategoryItem";
import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react";
import { GrSearch } from "react-icons/gr";

const CategorySidebar = () => {
  return (
    <div>
      <div className="w-[350px] h-[84vh] rounded-xl bg-white">
        <div>
          <div className="py-4 bg-primary text-center text-white rounded-t-xl">
            <h4>Categories</h4>
          </div>
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
        <div className="px-2 overflow-y-scroll h-[79%] sideBar space-y-1">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
