import { useEffect } from "react"
import { searchDrink } from "../api/Drinks"

export function Home()
{
    useEffect(() => {
        async function loadData(){
            const drinks= await searchDrink("margarita");
            console.log(drinks);
            
        }
        loadData();
    },[])

    return(
        <h1>Home</h1>
    )
}