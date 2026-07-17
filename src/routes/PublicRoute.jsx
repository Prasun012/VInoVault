import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute(){
    localStorage.setItem("isAgeVerified", "true");

    const isAgeVerified = localStorage.getItem('isAgeVerified');

    return isAgeVerified? <Outlet/> :<Navigate to='/verify' replace />
    
}