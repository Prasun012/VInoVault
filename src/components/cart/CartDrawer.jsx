import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";


function CartDrawer() {
  const { cart } = useCart();

  return (
    <div className="fixed top-0 right-0 w-96 h-screen bg-white shadow-2xl p-5 z-50 overflow-y-auto">

      <h2 className="text-2xl font-bold mb-4">
        Shopping Cart
      </h2>

      {cart.length > 0 && (
        <div className="space-y-3">
          {cart.map((item) => (
            <CartItem
              key={item.idDrink}
              item={item}
            />
          ))}
        </div>
      )}

      <OrderSummary />

    </div>
  );
}

export default CartDrawer;