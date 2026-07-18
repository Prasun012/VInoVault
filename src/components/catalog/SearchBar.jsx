export function SearchBar({search,setSearch}){

    return(
        <div className="my-6">
        <input 
            type="text" 
            placeholder="Search Drinks"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="border rounded-xl p-2 w-120"
        />
        </div>
    )
}