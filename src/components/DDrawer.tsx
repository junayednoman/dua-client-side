import { ReactNode } from "react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { ConditionalValue } from "@chakra-ui/react";
import { Button } from "./ui/button";

type TProps = {
  children: ReactNode;
  trigger: ReactNode;
  title?: string;
  size?: ConditionalValue<
    "sm" | "md" | "lg" | "xl" | "xs" | "full" | undefined
  >;
  placement?: ConditionalValue<"start" | "end" | "top" | "bottom" | undefined>;
  className?: string;
};

const DDrawer = ({
  children,
  trigger,
  title,
  size,
  placement,
  className,
}: TProps) => {
  return (
    <DrawerRoot placement={placement} size={size}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <DrawerBody className={className}>{children}</DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default DDrawer;
