import CategoryDrawer from "@/components/CategoryDrawer";
import DuaCard from "@/components/DuaCard";
import DuaCardSkeleton from "@/components/skeleton/DuaCardSkeleton";
import SubcatTitle from "@/components/SubcatTitle";
import { TDua } from "@/types";

const DuaPage = async ({
  searchParams,
}: {
  searchParams: { cat: string; subcat: string };
}) => {
  const queries = await searchParams;
  // fetch duas
  const res = await fetch(
    `${process.env.API_BASE_URL}/duas?cat=${queries.cat}`
  );
  const duas = await res.json();

  // fetch subcategory titles
  const res2 = await fetch(
    `${process.env.API_BASE_URL}/subcategories?cat=${queries.cat}`
  );
  const subcategories = await res2.json();

  const groupBySubcategory = (duas: TDua[]) => {
    return duas.reduce((acc: Record<string, TDua[]>, dua: TDua) => {
      if (!acc[dua.subcat_id]) {
        acc[dua.subcat_id] = [];
      }
      acc[dua.subcat_id].push(dua);
      return acc;
    }, {});
  };

  return (
    <main className="lg:mt-0 md:mt-[90px] mt-0">
      <CategoryDrawer />

      <div className="lg:overflow-y-scroll lg:h-[85vh] mb-20 pb-20 space-y-5 lg:pr-2 rounded-[10px] lg:mt-0 md:mt-5 mt-4">
        {duas.length == 0 || subcategories.length == 0 ? (
          <DuaCardSkeleton />
        ) : (
          Object.entries(groupBySubcategory(duas)).map(
            ([subcatId, subDuas]) => (
              <div key={subcatId} className="space-y-5">
                {/* Subcategory Title */}
                <SubcatTitle
                  subcategories={subcategories}
                  id={Number(subcatId)}
                />

                {/* Render Dua Cards */}
                {subDuas.map((dua: TDua, index: number) => (
                  <DuaCard key={index} dua={dua} />
                ))}
              </div>
            )
          )
        )}
      </div>
    </main>
  );
};

export default DuaPage;
