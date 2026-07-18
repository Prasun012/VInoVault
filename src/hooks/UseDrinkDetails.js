import { useQuery } from "@tanstack/react-query";
import { getDrinksByID } from "../api/Drinks";

export function useDrinkDetails(id){

    return useQuery({
        queryKey:["drinks",id],
        queryFn: () => getDrinksByID(id),
        enabled: !!id ,
    })
}