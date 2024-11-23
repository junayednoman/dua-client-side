import { TSubCategory } from "@/types";

const SubcatTitle = ({
  id,
  subcategories,
}: {
  id: number;
  subcategories: TSubCategory[];
}) => {
  const subcategory = subcategories.find((subcat) => subcat.id === id);

  return (
    <div className="bg-white p-4 px-5 rounded-[10px]">
      <p className="font-medium">
        <span className="text-primary font-semibold">Section:</span>{" "}
        {subcategory?.subcat_name_en}
      </p>
    </div>
  );
};

export default SubcatTitle;
