import CategorySkeleton from "./CategorySkeleton";

const CategorySidebarSkeleton = () => {
  return (
    <div className="sm:w-[350px] w-full md:h-[85vh] h-[100vh] rounded-xl bg-white p-3 py-4">
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
    </div>
  );
};

export default CategorySidebarSkeleton;
