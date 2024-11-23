import { ReactNode, Suspense } from "react";
import CategorySidebar from "../layout/CategorySidebar";
import CategorySidebarSkeleton from "@/components/skeleton/CategorySidebarSkeleton";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      suppressHydrationWarning
      className="flex lg:flex-row flex-col gap-6 pb-20"
    >
      <div className="lg:block hidden">
        <Suspense fallback={<CategorySidebarSkeleton />}>
          <CategorySidebar />
        </Suspense>
      </div>

      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default CategoryLayout;
