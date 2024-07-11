import React from "react";
import { useForm } from "react-hook-form";

function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
  };

  return (
    <aside>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="search">Filter by title</label>
          <input
            id="search"
            {...register("search", {
              minLength: {
                value: 3,
                message: "Minimum of three characters is required.",
              },
            })}
          />
          {errors.search && <p>{errors.search.message}</p>}
        </div>
      </form>
    </aside>
  );
}

export default SearchForm;
