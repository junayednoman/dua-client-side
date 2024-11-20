import icon from "@/assets/duar_gurutto.svg";
import Image from "next/image";
import Link from "next/link";

const CategoryItem = () => {
  return (
    <Link href={"#"}>
      <div className="rounded-xl w-full h-fit p-3 hover:bg-[#E8F0F5] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-[#F7F8FA] p-3 rounded-[10px] inline-block">
            {" "}
            <Image src={icon} alt="icon" width={33} height={33} />
          </div>
          <div>
            <h4 className="font-medium">Dua&apos;s Importance</h4>
            <span className="text-[12px] text-[#868686]">Subcategory: 6</span>
          </div>
        </div>
        <div className="pl-5 border-l text-center">
          <h4 className="font-medium">21</h4>
          <span className="text-[12px] text-[#868686]">Duas</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
