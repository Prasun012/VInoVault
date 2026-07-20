import B2BForm from "../components/forms/B2BForm";

export function B2BOrder(){

   return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        B2B Orders
      </h1>

      <B2BForm />
    </main>
  );
}