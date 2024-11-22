import CategoryDrawer from "@/components/CategoryDrawer";
import DuaCard from "@/components/DuaCard";
import SectionTitle from "@/components/SectionTitle";
const DuaPage = () => {
  return (
    <main className="lg:mt-0 md:mt-[90px] mt-0">
      <CategoryDrawer />

      <div className="lg:overflow-y-scroll lg:h-[85vh] mb-20 pb-20 space-y-5 lg:pr-2 rounded-[10px] lg:mt-0 md:mt-5 mt-4">
        <SectionTitle />
        <DuaCard />
        <DuaCard />
        <SectionTitle />
        <DuaCard />
        <DuaCard />
        <SectionTitle />
        <DuaCard />
      </div>
    </main>
  );
};

export default DuaPage;
