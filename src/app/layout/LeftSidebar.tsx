import Image from "next/image";
import logoImg from "@/assets/dua-logo.svg";
import supportImg from "@/assets/I want to support.png";
import Link from "next/link";
import { menuItems } from "../constants/menuItems.constant";

const LeftSidebar = () => {
  return (
    <div className="xl:block hidden">
      <div className="w-[98px] h-[94vh] p-3 py-5 bg-white rounded-[20px] flex flex-col justify-between gap-20 overflow-y-scroll sideBar">
        <Link href={"/"}>
          <Image
            src={logoImg}
            width={52}
            height={52}
            alt="logo"
            className="mx-auto"
          />
        </Link>

        <div className="text-center space-y-4">
          {menuItems.map((item) => (
            <Link
              className="bg-background p-[10px] rounded-full inline-block mx-auto"
              href={item.path}
              key={item.name}
            >
              <Image src={item.icon} width={20} height={20} alt={item.name} />
            </Link>
          ))}
        </div>
        <Link href={"#"}>
          <Image
            src={supportImg}
            width={60}
            height={60}
            alt="logo"
            className="mx-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
