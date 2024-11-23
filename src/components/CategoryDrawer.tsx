import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "./ui/drawer";
import { HiOutlineBars3 } from "react-icons/hi2";
import CategorySidebar from "@/app/layout/CategorySidebar";
import { Suspense } from "react";

const CategoryDrawer = () => {
  return (
    <DrawerRoot placement={"start"} size={"sm"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <div className="bg-white p-4 px-5 rounded-[10px] lg:hidden flex items-center gap-2">
          <HiOutlineBars3 size={25} />
          <p className="font-medium">The servant</p>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody className="sm:p-6 p-0 bg-background">
          <Suspense fallback={<CategorySidebar />}>
            <CategorySidebar />
          </Suspense>
        </DrawerBody>

        <DrawerCloseTrigger className="text-white" />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default CategoryDrawer;
