import { Accordion } from "@chakra-ui/react";
import Link from "next/link";
import DuaTitle from "./DuaTitle";

const SubCategoryAccordionItem = ({
  item,
  activeItems,
}: {
  item: any;
  activeItems: string[];
}) => {
  return (
    <Accordion.Item value={item.value}>
      <Accordion.ItemTrigger>
        <Link
          href={"#"}
          className={`${
            activeItems?.includes(item.value) && "text-primary"
          } w-full text-left  relative py-2`}
        >
          <span className="absolute -left-[20px] top-[13px] w-[6px] h-[6px] bg-primary rounded-full"></span>
          <p className="font-medium text-sm">Sub category</p>
        </Link>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <DuaTitle />
        <DuaTitle />
        <DuaTitle />
        <DuaTitle />
        <DuaTitle />
      </Accordion.ItemContent>
    </Accordion.Item>
  );
};

export default SubCategoryAccordionItem;
