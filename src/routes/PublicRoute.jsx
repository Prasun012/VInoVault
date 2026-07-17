import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute(){

    const isAgeVerified = localStorage.getItem('isAgeVerified');

    return isAgeVerified? <Outlet/> :<Navigate to='/verify' replace />
    
}