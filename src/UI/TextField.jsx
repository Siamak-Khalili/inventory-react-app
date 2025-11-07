function TextField({
  type = "text",
  label,
  id,
  name,
  register,
  required,
  errors,
  validationSchema,
  extraClass,
  placeholder,
}) {
  return (
    <div className={` mb-5  ${extraClass ? extraClass : ""}`}>
      <label htmlFor={name} className="flex items-center gap-x-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, validationSchema)}
        className="border border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100 rounded-md w-full h-[45px] p-3 focus:outline-none focus:border-black dark:focus:border-neutral-400 text-sm "
      />
      {errors && errors[name] && (
        <span className="text-red-500 block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
