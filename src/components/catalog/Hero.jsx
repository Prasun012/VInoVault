import { SearchBar } from "./SearchBar";

export function Hero({ onSearch }) {
    return (
        <section className="bg-amber-500 py-8 px-6 rounded-lg">
            <h1 className="flex text-4xl font-bold justify-center text-center">
                Discover your perfect cocktail
            </h1>
            <p className="flex text-xl justify-center text-center mt-2">
                Browse 100s of different combinations
            </p>

            <div className="mt-6 max-w-2xl mx-auto">
                <SearchBar onSearch={onSearch} />
            </div>
        </section>
    );
}