import { useParams } from "react-router-dom"
import { useDrinkDetails } from "../hooks/UseDrinkDetails"
import { useCart } from "../context/CartContext"

export function DrinkDetail() {

    const {id}=useParams()
    const {addToCart}=useCart()
    
    const {
        data: drink,
        isLoading,
        isError,
        error

    }=useDrinkDetails(id)

    if(isLoading)
        return<h1>Loading ...</h1>

    if(isError)
        return<h1>{error.message}</h1>


    const ingredients = [];

        for (let i = 1; i <= 15; i++) {
        if (drink[`strIngredient${i}`]) {
            ingredients.push({
            ingredient: drink[`strIngredient${i}`],
            measure: drink[`strMeasure${i}`],
            });
        }
    }
    return (
    <div className="max-w-5xl mx-auto p-8">

      <div className="grid md:grid-cols-2 gap-8">

        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="w-full rounded-lg"
        />

        <div className="bg-slate-100 ">
          <h1 className="text-4xl font-bold py-1 bg-slate-300 ">
            {drink.strDrink}
          </h1>

          <p className="text-lg font-semibold mt-2">
            Category: {drink.strCategory}
          </p>

          <p className="text-lg font-semibold ">
            Type: {drink.strAlcoholic}
          </p>

          <p className="text-lg font-semibold ">
            Glass: {drink.strGlass}
          </p>

          <button 
          onClick={() => addToCart(drink)}
          className="mt-6 bg-black text-white px-6 py-2 rounded-xl">
            Add to Cart
          </button>

        </div>

      </div>

        <div className="mt-10 bg-slate-100">
            <h2 className="text-3xl font-bold mb-3 bg-slate-300">
                Ingredients
            </h2>
            <ul className="list-disc pl-6 text-lg font-semibold bg-slate-100">
            {ingredients.map((item, index) => (
            <li key={index}>
                {item.measure} {item.ingredient}
            </li>
            ))}
            </ul>
        </div>


        <div className="flex-col mt-10 bg-slate-100">
            <h2 className="text-3xl font-bold mb-3 bg-slate-300">Instructions</h2>

            <p className="text-lg font-semibold">{drink.strInstructions}</p>
        </div>
    </div>

  );
    
}