export function SortDropdown({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="border rounded-md p-2"
    >
      <option value="az">A - Z</option>
      <option value="za">Z - A</option>
      
    </select>
  );
}