import { Accordion, AccordionRoot } from "@chakra-ui/react";
import { items } from "@/app/layout/CategorySidebar";
import SubCategoryAccordionItem from "./SubCategoryAccordionItem";
import CategoryItem from "./CategoryItem";
import { useState } from "react";

const CategoryAccordionItem = ({
  item,
  activeItems,
}: {
  item: any;
  activeItems: string[];
}) => {
  const [subCategoryActiveItems, setSubCategoryActiveItems] = useState<
    string[]
  >([]);
  return (
    <Accordion.Item value={item.value}>
      <Accordion.ItemTrigger>
        <CategoryItem item={item} activeItems={activeItems} />
      </Accordion.ItemTrigger>
      <Accordion.ItemContent className="p-2 px-1">
        {/* render sub category here */}
        <div className="pl-4 ml-8 border-l-2 border-dotted border-primary">
          <AccordionRoot
            onValueChange={({ value }) => setSubCategoryActiveItems(value)}
            collapsible
          >
            {items.map((item, index) => (
              <SubCategoryAccordionItem
                activeItems={subCategoryActiveItems}
                item={item}
                key={index}
              />
            ))}
          </AccordionRoot>
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  );
};

export default CategoryAccordionItem;
