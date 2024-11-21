import { ReactNode } from "react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

type TProps = {
  children: ReactNode;
  trigger: ReactNode;
  title?: string;
};

const DDrawer = ({ children, trigger, title }: TProps) => {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
        {/* <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button>Save</Button>
        </DrawerFooter> */}
      </DrawerContent>
    </DrawerRoot>
  );
};

export default DDrawer;
