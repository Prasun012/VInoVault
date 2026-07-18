import { api } from "./Axios";

export async function searchDrink(query = ""){
    const response=await api.get(`/search.php?s=${query}`);
    return response.data.drinks
}

export async function getDrinksByID(ID = ""){
    const response=await api.get(`/lookup.php?i=${ID}`);
    return response.data.drinks[0];

}

export async function getAlcholicDrinks(){
    const response =await api.get("/filter.php?a=Alcholic");
    return response.data.drinks
}

export async function getNonAlcholicDrinks(){
    const response = await api.get("/filter.php?a=Non_Alcholic")
    return response.data.drinks
}