import { ReactNode } from "react";
import CategorySidebar from "../layout/CategorySidebar";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-6 pb-20">
      <div className="lg:block hidden">
        <CategorySidebar />
      </div>

      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default CategoryLayout;
