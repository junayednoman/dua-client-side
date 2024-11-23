import { Accordion } from "@chakra-ui/react";
import Link from "next/link";
import DuaTitle from "./DuaTitle";
import { TDua, TSubCategory } from "@/types";

type TProps = {
  item: TSubCategory;
  activeItems: string[];
  duaTitles: Pick<TDua, "dua_name_en" | "id" | "subcat_id">[];
};

const SubCategoryAccordionItem = ({ item, activeItems, duaTitles }: TProps) => {
  return (
    <Accordion.Item value={item.id.toString()}>
      <Accordion.ItemTrigger>
        <Link
          href={`/duas?cat=${item.cat_id}&subcat=${item.id}`}
          className={`${
            activeItems?.includes(item.id.toString()) && "text-primary"
          } w-full text-left  relative py-2`}
        >
          <span className="absolute -left-[20px] top-[13px] w-[6px] h-[6px] bg-primary rounded-full"></span>
          <p className="font-medium text-sm">{item.subcat_name_en}</p>
        </Link>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        {duaTitles?.map((dua, index) => (
          <DuaTitle duaId={dua.id} title={dua.dua_name_en} key={index} />
        ))}
      </Accordion.ItemContent>
    </Accordion.Item>
  );
};

export default SubCategoryAccordionItem;
