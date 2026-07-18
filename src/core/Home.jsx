import { useState } from "react";
import { Filter } from "../components/catalog/Filter";
import { Hero } from "../components/catalog/Hero";
import { ProductGrid } from "../components/catalog/ProductGrid";
import { UseCatalogSearch } from "../hooks/UseCatalogSearch";
import { SearchBar } from "../components/catalog/SearchBar";

export function Home()
{
    const [search,setSearch]=useState("")
    const [filter,setFilter]=useState("all")

   const {
    data:drinks,
    isLoading,
    isError,
    error
   }=UseCatalogSearch("margarita")

   if(isLoading)
    return<h1> Loading...</h1>
 
   if(isError)
    return <h2>{error.message}</h2>

   if(error)
    return<h1>Something Went Wrong</h1>

   console.log(drinks);

   let filterDrinks=drinks

   if(filterDrinks==="Alcohoic"){
    filterDrinks = drinks?.filter(
        (drinks)=> drinks.strAlcholic==="Alcholic"
    )
   }


   if(filterDrinks==="Non_Alcohoic"){
    filterDrinks = drinks?.filter(
        (drinks)=> drinks.strAlcholic==="Non_Alcholic"
    )
   }
   
   

    return(
        <div className="mx-auto px-6 py-8">
            <Hero/>
            
            <SearchBar
            search={search}
            setSearch={setSearch}
            />

            <Filter
            filter={filter}
            setFilter={setFilter}
            />
            <ProductGrid 
            drink={filterDrinks}
            />
        </div>
    )
}