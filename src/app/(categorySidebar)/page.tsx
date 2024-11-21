import DuaCard from "@/components/DuaCard";
import SectionTitle from "@/components/SectionTitle";

const page = () => {
  return (
    <div className="overflow-y-scroll h-[84vh] mb-20 pb-20 space-y-5 pr-2 rounded-[10px]">
      <SectionTitle />
      <DuaCard />
      <DuaCard />
      <SectionTitle />
      <DuaCard />{" "}
    </div>
  );
};

export default page;
