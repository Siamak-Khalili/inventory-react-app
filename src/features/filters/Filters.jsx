import TextField from "../../UI/TextField";
import Select from "../../UI/Select";

const sortOptions = [
  {
    title: "Erliest",
    id: "earliest",
  },
  {
    title: "Latest",
    id: "latest",
  },
];

function Filters({ category, register }) {
  return (
    <div className="section">
      <h2 className="section-title">Filters</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <TextField
          label="Search"
          id="search"
          name="search"
          register={register}
          extraClass=""
        />
        <Select
          label="Sort By"
          options={sortOptions}
          name="sort"
          register={register}
          width="40"
          extraClass="mb-5 w-full"
          firstOption="option"
        />
        <Select
          label="Category"
          options={category}
          name="category"
          register={register}
          width="40"
          extraClass="mb-5 w-full"
          firstOption="category"
        />
      </div>
    </div>
  );
}

export default Filters;
