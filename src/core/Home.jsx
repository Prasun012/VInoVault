import { useState } from "react";
import { Filter } from "../components/catalog/Filter";
import { Hero } from "../components/catalog/Hero";
import { ProductGrid } from "../components/catalog/ProductGrid";
import { UseCatalogSearch } from "../hooks/UseCatalogSearch";

export function Home() {
    const [search, setSearch] = useState("p");
    const [filter, setFilter] = useState("all");

    const {
        data: drinks,
        isLoading,
        isError,
        error,
    } = UseCatalogSearch(search);

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h2>{error.message}</h2>;
    if (error) return <h1>Something Went Wrong</h1>;

    let filterDrinks = drinks;

    if (filter === "Alcholic") {
        filterDrinks = drinks?.filter((drink) => drink.strAlcoholic === "Alcoholic");
    }

    if (filter === "Non_Alcholic") {
        filterDrinks = drinks?.filter((drink) => drink.strAlcoholic === "Non alcoholic");
    }

    return (
        <div className="mx-auto px-6 py-8">
            <Hero onSearch={setSearch} />

            <div className="mt-6">
                <Filter filter={filter} setFilter={setFilter} />
            </div>

            <ProductGrid drink={filterDrinks} />
        </div>
    );
}