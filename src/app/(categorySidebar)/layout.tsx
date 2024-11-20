import { ReactNode } from "react";
import CategorySidebar from "../layout/CategorySidebar";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-6 pb-20">
      <CategorySidebar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default CategoryLayout;
