import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute(){

    const user=localStorage.getitem('user');

    return user? <Outlet/> : <Navigate to='/login' replace />

}