export function Filter({filter,setFilter}){

return(
    <div className="flex gap-5 mb-4">

        <button 
        onClick={() => setFilter('all')}
        className={filter === "all" ? "bg-black text-white px-2 py-0.5 rounded-xl" : "border px-2 py-0.5 rounded-xl"}>All</button>
        
        <button
         onClick={() => setFilter("Alcholic")}
         className={filter === "Alcholic" ? "bg-black text-white px-2 py-0.5 rounded-xl" : "border px-2 py-0.5 rounded-xl"}> Alcholic</button>
        
        <button 
         onClick={() => setFilter("Non_Alcholic")}
         className={filter === "Non_Alcholic" ? "bg-black text-white px-2 py-0.5 rounded-xl" : "border px-2 py-0.5 rounded-xl"}>Non-Alcholic</button>
    </div>
)

}