import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
  DrawerTrigger,
} from "./ui/drawer";
import RightSidebar from "@/app/layout/RightSidebar";
import { BsFillGearFill } from "react-icons/bs";
import { Button } from "./ui/button";

const SettingsDrawer = () => {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <BsFillGearFill size={21} className="text-primary cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody className="sm:p-6 p-0">
          <RightSidebar />
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger>
            {" "}
            <Button>Cancel</Button>
          </DrawerActionTrigger>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default SettingsDrawer;
