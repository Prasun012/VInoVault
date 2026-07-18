import { ProductCard } from "./ProductCard";

export function ProductGrid({drink}){

    if(!drink || drink.length === 0)
        return<p>Drink Not Found</p>

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {drink.map((drink)=>(
            <ProductCard
            key={drink.idDrink}
            drink={drink}
            />
        ))}
    </div>
    )
}