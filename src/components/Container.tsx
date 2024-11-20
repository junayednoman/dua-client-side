import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="xl:mx-12 md:mx-8 mx-4">{children}</div>;
};

export default Container;
