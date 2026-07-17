export function Navbar(){
    
    return(
        <>
        <main>
            <header className= "h-[72px] w-full flex item-center justify-between px-6 boarder-b bparder-slate-300 bg-gray-200">
                <div className="flex text-2xl items-center font-bold">
                    <span className="text-slate-800">VINO</span>
                    <span className="text-amber-700">VAULT</span>
                </div>
                
                <div className="flex items-center gap-6">
                    <a className="text-amber-700 font-medium">Catalog</a>
                    <a className="text-slate-500">B2B Order</a>
                    <a className="text-slate-500">Profile</a>
                    
                    <div className="relative">
                        <button className="bg-black text-white px-4 py-2 rounded-md">Cart</button>
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          3
                        </span>
                    </div>

                </div>
            </header>
        </main>
        
        </>
    )
}