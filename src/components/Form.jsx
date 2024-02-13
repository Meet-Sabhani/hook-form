import React from "react";
import { useForm } from "react-hook-form";
import { FormStyle } from "../styles/FormStyle";

export const FormHook = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="number">Number</label>
        <input
          type="number"
          id="number"
          {...register("number", { required: "Number is required" })}
        />
        {errors.number && <p>{errors.number.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </FormStyle>
  );
};
