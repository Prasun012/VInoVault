import OrderHistory from "../components/profile/OrderHistory";
import ProfileCard from "../components/profile/ProfileCard";
import StatsCard from "../components/profile/StatsCard";

export function Profile() {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6 bg-slate-200">
      <h1 className="text-3xl font-bold">My Profile</h1>

      <ProfileCard />

      <StatsCard />

      <OrderHistory />
    </main>
  );
}

