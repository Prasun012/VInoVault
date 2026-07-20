import { useQuery } from "@tanstack/react-query";
import { searchDrink } from "../api/Drinks";

export function UseCatalogSearch(search = "") {
    return useQuery({
        queryKey: ["drinks", search],
        queryFn: () => searchDrink(search || "p"),
    });
}