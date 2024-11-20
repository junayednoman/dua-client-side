import Image from "next/image";
import logoImg from "@/assets/dua-logo.svg";
import Link from "next/link";
import { menuItems } from "../constants/MenuItems";

const LeftSidebar = () => {
  return (
    <div className="w-[100px] h-[94vh] border p-3 py-5 bg-white rounded-[20px]">
      <Link href={"/"}>
        <Image
          src={logoImg}
          width={52}
          height={52}
          alt="logo"
          className="mx-auto"
        />
      </Link>

      <div className="my-20 text-center space-y-4">
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
    </div>
  );
};

export default LeftSidebar;
