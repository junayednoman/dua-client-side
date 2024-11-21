import Image from "next/image";
import arrow from "@/assets/duaarrow.svg";
const DuaTitle = () => {
  return (
    <>
      <a href="#">
        <div className="flex items-center gap-2 py-3">
          <Image
            src={arrow}
            width={16}
            height={20}
            className="-mt-2"
            alt="arrow"
          />
          <span className="capitalize text-[13px]">
            Excellence of dua in the morning
          </span>
        </div>
      </a>
    </>
  );
};

export default DuaTitle;
