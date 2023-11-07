"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  name: string;
  email: string;
  password: string;
};

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().min(8),
});

function HookLesson() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="w-1/2 bg-gray-500 p-8 mt-5 justify-center mx-9">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className={`border-2 rounded-md p-2 text-black${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className={`border-2 rounded-md p-2 text-black ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <span className="text-red-500">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className={`border-2 rounded-md p-2 text-black ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <span className="text-red-500">
              Password must be at least 8 characters long
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HookLesson;
