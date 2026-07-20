import { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartDrawer from "../cart/CartDrawer";
import { Link } from "react-router-dom";

export function Navbar(){

     const [showCart, setShowCart] = useState(false);

    const{cart} = useCart();
    const totalItems= cart.reduce(
        (sum,item)=> sum +item.quantity,
        0
    );
    
    return(
        <>
        <main>
            <header className= "h-[72px] w-full flex item-center justify-between px-6 boarder-b boarder-slate-300 bg-gray-200">
                <div className="flex text-2xl items-center font-bold">
                    <span className="text-slate-800">VINO</span>
                    <span className="text-amber-700">VAULT</span>
                </div>
                
                <div className="flex items-center gap-6">
                    <Link to ="/" className="text-amber-700 font-medium">Catalog</Link>
                    <Link to="/b2b-orders" className="text-slate-500">B2B Order</Link>
                    <Link to="/profile" className="text-slate-500">Profile</Link>
                    
                    <div className="relative">
                        <button
                        onClick={() => setShowCart((prev) => !prev)}
                        className="bg-black text-white px-4 py-2 rounded-md">
                            Cart ({totalItems})
                        </button>
                    </div>

                </div>
            </header>
        </main>
        {showCart && (
        <>
    <div
      className="fixed inset-0 bg-black/40 z-40"
      onClick={() => setShowCart(false)}
    />

    <CartDrawer closeCart={() => setShowCart(false)} />
  </>
      )}
        </>
    )
}