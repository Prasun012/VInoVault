import { useState } from "react";

export function SearchBar({onSearch}){

const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search drinks..."
        className="border rounded-md p-2 flex-1"
      />

      <button
        type="submit"
        className="bg-black text-white px-4 rounded-md"
      >
        Search
      </button>
    </form>
  );
}