import { Skeleton } from "../ui/skeleton";

const CategorySkeleton = () => {
  return (
    <div className="flex items-center gap-x-4 cursor-pointer hover:bg-[#E8F0F5] rounded-xl w-full h-fit p-3">
      <div>
        <Skeleton className="rounded-lg w-[55px] h-[55px] bg-icon" />
      </div>
      <div>
        <Skeleton w={"200px"} h={"16px"} className="rounded-lg bg-icon" />
        <Skeleton w={"160px"} h={"11px"} className="rounded-lg bg-icon mt-3" />
      </div>
    </div>
  );
};

export default CategorySkeleton;
