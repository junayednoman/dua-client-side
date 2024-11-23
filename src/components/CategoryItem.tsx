import Image from "next/image";
import Link from "next/link";
import { TCategory } from "@/types";
import { iconCollection } from "@/app/constants/icons.constant";

const CategoryItem = ({
  activeItems,
  item,
}: {
  activeItems: string[];
  item: TCategory;
}) => {
  return (
    <Link href={`/duas?cat=${item.id}`} className="w-full my-1">
      <div
        className={`${
          activeItems.includes(item.id.toString()) && "bg-[#E8F0F5]"
        } hover:bg-[#E8F0F5] rounded-xl  w-full h-fit p-3 flex items-center justify-between gap-3`}
      >
        <div className="flex items-center gap-3">
          <div className="bg-[#F7F8FA] p-3 rounded-[10px] inline-block">
            <Image
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              src={iconCollection[`${item.cat_icon}`]}
              alt="icon"
              width={33}
              height={33}
            />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-base">{item.cat_name_en}</h4>
            <span className="text-[12px] text-[#868686]">
              Subcategory: {item.no_of_subcat}
            </span>
          </div>
        </div>
        <div className="pl-5 border-l text-center">
          <h4 className="font-medium">{item.no_of_dua}</h4>
          <span className="text-[12px] text-[#868686]">Duas</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
