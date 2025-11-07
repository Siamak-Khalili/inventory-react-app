import { useState } from "react";
import AddCategoryForm from "./AddCategoryForm";
import { BsPlusLg } from "react-icons/bs";

function CategoryLayout({ category, setCategory }) {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  return (
    <>
      {showCategoryForm ? (
        <AddCategoryForm
          onCancel={() => setShowCategoryForm(false)}
          category={category}
          setCategory={setCategory}
        />
      ) : (
        <button
          className="flex items-center justify-center gap-2  bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-md p-4 w-full text-primary-600 text-sm mb-6 font-medium"
          onClick={() => setShowCategoryForm(true)}
        >
          <BsPlusLg /> Add New Category
        </button>
      )}
    </>
  );
}

export default CategoryLayout;
