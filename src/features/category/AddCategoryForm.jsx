import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import TextArea from "../../UI/TextArea";
import TextField from "../../UI/TextField";
import { useEffect } from "react";

function AddCategoryForm({ onCancel, category, setCategory }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    if (data.title) {
      const newCategory = {
        ...data,
        createAt: new Date().toISOString(),
        id: new Date().getTime(),
      };

      setCategory([...category, newCategory]);

      reset();
    } else {
      return;
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      onCancel();
    }
  }, [isSubmitSuccessful]);

  return (
    <div className="section">
      <h2 className="section-title">Add Category</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="category-title"
          name="title"
          label="Title"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "Title is required!",
            minLength: {
              value: 5,
              message: "Length must be more than 15 characters.",
            },
          }}
        />
        <TextArea
          id="category-desc"
          name="description"
          label="Description"
          register={register}
          required
          errors={errors}
        />
        <div className="flex items-center justify-between gap-x-4 mt-8">
          <Button
            buttonName="Add Category"
            type="submit"
            btnClass="flex-1 bg-orange-500 text-white rounded-xl py-2 
           hover:bg-orange-600 hover:shadow-md 
           focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 
           transition-all duration-200 font-medium"
          />
          <Button
            buttonName="Cancel"
            btnClass="flex-1 border border-orange-300 text-orange-700 dark:text-orange-500 rounded-xl py-2 
           hover:border-orange-300 hover:text-orange-800 
           focus:outline-none focus:ring-2 focus:ring-orange-200 
           transition-all duration-200 font-medium"
            onClick={onCancel}
          />
        </div>
      </form>
    </div>
  );
}

export default AddCategoryForm;
