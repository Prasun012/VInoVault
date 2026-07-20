import { Navigate } from "react-router-dom";
import OrderHistory from "../components/profile/OrderHistory";
import ProfileCard from "../components/profile/ProfileCard";
import StatsCard from "../components/profile/StatsCard";
import { useAuth } from "../context/AuthContext";

export function Profile() {

    const { logout } = useAuth();
    function handleLogout() {
    logout();
    Navigate("/login");
  }
  
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6 bg-slate-200">
     <div className="flex justify-between">
       <h1 className="text-3xl font-bold">My Profile</h1>
       <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>

       
      </div>


      <ProfileCard />

      <StatsCard />

      <OrderHistory />
    </main>
  );
}

