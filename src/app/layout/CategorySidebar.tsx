"use client";
import CategoryAccordionItem from "@/components/CategoryAccordionItem";
import { AccordionRoot } from "@/components/ui/accordion";
import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { GrSearch } from "react-icons/gr";

const CategorySidebar = () => {
  const [activeItems, setActiveItems] = useState<string[]>(["a"]);
  return (
    <div>
      <div className="w-[350px] h-[84vh] rounded-xl bg-white">
        <div>
          <div className="py-4 bg-primary text-center text-white rounded-t-xl">
            <h4>Categories</h4>
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
          <AccordionRoot
            onValueChange={({ value }) => setActiveItems(value)}
            collapsible
            defaultValue={["a"]}
          >
            {items.map((item, index) => (
              <CategoryAccordionItem
                activeItems={activeItems}
                item={item}
                key={index}
              />
            ))}
          </AccordionRoot>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;

export const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
  // { value: "d", title: "Third Item", text: "Some value 3..." },
  // { value: "e", title: "Third Item", text: "Some value 3..." },
  // { value: "f", title: "Third Item", text: "Some value 3..." },
  // { value: "g", title: "Third Item", text: "Some value 3..." },
  // { value: "h", title: "Third Item", text: "Some value 3..." },
];
