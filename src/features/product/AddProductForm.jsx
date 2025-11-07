import { useForm } from "react-hook-form";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";
import Select from "../../UI/Select";

function AddProductForm({ category, product, setProduct }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const selectedCat = category.find(
      (cat) => Number(cat.id) === Number(data.categoryId)
    );

    const newProduct = {
      ...data,
      createAt: new Date().toISOString(),
      id: new Date().getTime(),
      categoryId: selectedCat?.id,
      categoryTitle: selectedCat?.title,
    };
    setProduct([...product, newProduct]);

    reset();
  };

  return (
    <div className="section">
      <h2 className="section-title">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <TextField
          id="product-title"
          name="title"
          label="Product Title"
          register={register}
          required
          errors={errors}
          placeholder="Enter product name"
          validationSchema={{
            required: "Title is required!",
            minLength: {
              value: 5,
              message: "Length must be more than 15 characters.",
            },
          }}
        />
        <TextField
          id="product-quantity"
          name="quantity"
          label="Quantity"
          type="number"
          register={register}
          required
          placeholder="0"
          errors={errors}
          validationSchema={{
            required: "Quantity is required!",
            min: {
              value: 1,
              message: "Quantity must be greater than 0.",
            },
          }}
        />

        <Select
          label="Category"
          options={category}
          name="categoryId"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "Select a category is required!",
          }}
          firstOption="category"
        />

        <div className="flex items-center justify-between gap-x-4">
          <Button
            buttonName="Add Product"
            type="submit"
            btnClass="flex-1 bg-orange-500 text-white rounded-xl py-2 hover:bg-orange-600 mt-8 transition-all duration-200 font-medium"
          />
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
