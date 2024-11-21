import SettingItem from "@/components/SettingItem";
import { settingItems } from "../constants/settings.constant";

const RightSidebar = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="w-[270px] h-[85vh] border px-4 py-7 bg-white rounded-[20px] overflow-y-scroll sideBar">
        <h4 className="text-xl font-semibold text-center">Settings</h4>
        <div className="space-y-3 mt-6">
          {settingItems.map((item, index) => (
            <SettingItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
