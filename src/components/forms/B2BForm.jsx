import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import z from "zod";


const schema = z.object({
  company: z.string().min(1, "Company name is required"),

 email: z
  .string()
  .email("Enter a valid email"),

  license: z.string().min(1, "Business license is required"),

  quantity: z
    .number({
      error: "Quantity is required",
    })
    .min(1, "Quantity must be at least 1"),
});

export default function B2BForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow-md p-6 space-y-4 max-w-xl"
    >
      <div>
        <label className="block mb-1 font-medium">
          Company Name
        </label>

        <input
          {...register("company")}
          className="w-full border rounded-md p-2"
          placeholder="Company Name"
        />

        {errors.company && (
          <p className="text-red-500 text-sm">
            {errors.company.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Email
        </label>

        <input
          {...register("email")}
          className="w-full border rounded-md p-2"
          placeholder="Email"
        />

        {errors.email && (
          <p className="text-red-500 text-sm">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Business License
        </label>

        <input
          {...register("license")}
          className="w-full border rounded-md p-2"
          placeholder="License Number"
        />

        {errors.license && (
          <p className="text-red-500 text-sm">
            {errors.license.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Quantity
        </label>

        <input
          type="number"
          {...register("quantity", {
            valueAsNumber: true,
          })}
          className="w-full border rounded-md p-2"
          placeholder="Quantity"
        />

        {errors.quantity && (
          <p className="text-red-500 text-sm">
            {errors.quantity.message}
          </p>
        )}
      </div>

      {submitted && (
        <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Order submitted successfully.
        </div>
      )}

      <button
        type="submit"
        className="bg-amber-700 text-white px-6 py-2 rounded-md hover:bg-amber-800"
      >
        Submit Order
      </button>
    </form>
  );
}