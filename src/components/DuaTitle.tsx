import Image from "next/image";
import arrow from "@/assets/duaarrow.svg";
import { useRouter, useSearchParams } from "next/navigation";

type TProps = {
  title: string;
  duaId: number;
};

const DuaTitle = ({ title, duaId }: TProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const handleAddQuery = () => {
    params.set("dua", duaId.toString());

    router.replace(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={handleAddQuery}>
        <div className="flex items-center gap-2 py-3">
          <Image
            src={arrow}
            width={16}
            height={20}
            className="-mt-2"
            alt="arrow"
          />
          <span
            className={`capitalize text-[13px] 
              ${searchParams.get("dua") === duaId.toString() && "text-primary"}
              `}
          >
            {title}
          </span>
        </div>
      </div>
    </>
  );
};

export default DuaTitle;
