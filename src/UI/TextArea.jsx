function TextArea({ name, id, cols = "50", rows = "3", label, register }) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block">
        {label}
      </label>
      <textarea
        id={id}
        cols={cols}
        rows={rows}
        {...register(name)}
        className="border border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100 rounded-md w-full  p-3 focus:outline-none focus:border-black dark:focus:border-neutral-400 text-sm "
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
          }
        }}
      ></textarea>
    </div>
  );
}

export default TextArea;
