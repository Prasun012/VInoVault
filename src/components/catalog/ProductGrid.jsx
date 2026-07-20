import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ drink }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

    const totalPages = useMemo(() => {
        if (!drink || drink.length === 0) return 1;
        return Math.ceil(drink.length / pageSize);
    }, [drink, pageSize]);

    const pagedDrinks = useMemo(() => {
        if (!drink || drink.length === 0) return [];
        const start = (currentPage - 1) * pageSize;
        return drink.slice(start, start + pageSize);
    }, [drink, currentPage, pageSize]);

    if (!drink || drink.length === 0) return <p>Drink Not Found</p>;

    return (
        <>
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="text-sm text-slate-600">
                    Showing {pagedDrinks.length} of {drink.length} drinks
                </div>

                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-slate-700">Per page</label>
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                        className="rounded border border-slate-300 px-2 py-1"
                    >
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={12}>12</option>
                        <option value={16}>16</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {pagedDrinks.map((drinkItem) => (
                    <ProductCard key={drinkItem.idDrink} drink={drinkItem} />
                ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="rounded border px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`rounded px-3 py-2 text-sm ${
                            currentPage === index + 1
                                ? "bg-black text-white"
                                : "border border-slate-300"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="rounded border px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    );
}