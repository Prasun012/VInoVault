import { useAuth } from "../../context/AuthContext";


function ProfileCard() {
  const { user } = useAuth();
    console.log(user);
  if (!user) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p>No user logged in.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-6">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-24 h-24 rounded-full border object-cover"
        />

        <div>
          <h2 className="text-2xl font-bold">
            {user.firstName} {user.lastName}
          </h2>

          <p className="text-gray-600">{user.email}</p>

          <p className="text-gray-500">@{user.username}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;