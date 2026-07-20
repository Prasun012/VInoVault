import { useNavigate, useLocation } from "react-router-dom";

export function Verify(){

  const navigate = useNavigate();
  const location = useLocation();

  function handleVerify() {
    localStorage.setItem("isAgeVerified", "true");
    navigate(location.state?.from?.pathname || "/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-8 shadow-xl w-[400px] text-center">
        <h1 className="text-3xl font-bold mb-4">
          Age Verification
        </h1>

        <p className="text-gray-600 mb-6">
          You must be 18 years or older to enter VinoVault.
        </p>

        <div className="flex justify-center gap-4">
          <button onClick={handleVerify} className="bg-amber-700 text-white px-6 py-2 rounded">
            I am 18+
          </button>

          <button  onClick={() => {
    window.location.href = "https://www.google.com";
  }} className="bg-gray-300 px-6 py-2 rounded">
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}