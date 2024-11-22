import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="2xl:mx-10 xl:mx-6 md:mx-4 mx-3">{children}</div>;
};

export default Container;
