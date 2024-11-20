import { ReactNode } from "react";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-6 pb-20">
      <div className="w-[320px]">
        <div className="w-[320px] h-[84vh] border p-3 border-black rounded-lg ">
          settings
        </div>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default CategoryLayout;
