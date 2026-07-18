import { Link } from "react-router-dom";

export function ProductCard({drink}){

    
    return (
        <div className="boarder rounded shadow-m p-4 bg-slate-100">
            <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="w-full h-48 object-cover rounded-md"
            />

            <h2 className="mb-1 font-bold text-xl">{drink.strDrink}</h2>

            <Link to={`/drink/${drink.idDrink}`}>
            <button className="flex w-50 bg-black text-white rounded-xl justify-center">View Details</button>
            </Link>
            
        </div>
    )
}