import Image from "next/image";

type TItem = {
  icon: string;
  text: string;
};

const SettingItem = ({ item }: { item: TItem }) => {
  const { icon, text } = item;
  return (
    <div className="px-3 py-2 rounded-lg flex items-center gap-4 bg-[#F7F8FA] cursor-pointer">
      <div className="p-2 rounded-full bg-[#E8F0F5]">
        <Image src={icon} alt="language" width={22} height={22} />
      </div>
      <p className="text-[#868686] text-sm font-medium">{text}</p>
    </div>
  );
};

export default SettingItem;
