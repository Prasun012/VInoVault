import { useState } from "react";
import { Link } from "react-router-dom";

export function ProductCard({ drink }) {
    const [showImage, setShowImage] = useState(false);
    const isAlcoholic = drink.strAlcoholic === "Alcoholic";

    return (
        <>
            <div className="border rounded shadow-md p-4 bg-slate-100">
                <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    className="w-full h-48 object-cover rounded-md cursor-pointer hover:opacity-90 transition"
                    onClick={() => setShowImage(true)}
                />

                <h2 className="mt-3 mb-2 font-bold text-xl">{drink.strDrink}</h2>

                <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                        isAlcoholic
                            ? "bg-amber-600 text-white"
                            : "bg-emerald-600 text-white"
                    }`}
                >
                    {isAlcoholic ? "Alcoholic" : "Non-Alcoholic"}
                </span>

                <Link to={`/drink/${drink.idDrink}`}>
                    <button className="mt-4 flex w-full bg-black text-white rounded-xl justify-center py-2">
                        View Details
                    </button>
                </Link>
            </div>

            {showImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setShowImage(false)}
                >
                    <div className="relative max-w-3xl w-full rounded-2xl bg-white p-4 shadow-2xl">
                        <button
                            className="absolute right-3 top-3 rounded-full bg-black px-3 py-1 text-sm text-white"
                            onClick={() => setShowImage(false)}
                        >
                            Close
                        </button>
                        <img
                            src={drink.strDrinkThumb}
                            alt={drink.strDrink}
                            className="w-full max-h-[80vh] object-contain rounded-xl"
                        />
                    </div>
                </div>
            )}
        </>
    );
}