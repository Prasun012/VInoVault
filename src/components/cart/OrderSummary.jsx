import { useState } from "react";
import { useCart } from "../../context/CartContext";

function OrderSummary() {
  const { cart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.quantity * 1200,
    0
  );

  function handleOrderNow() {
    clearCart();
    setOrderPlaced(true);
  }

  return (
    <div className="border-t mt-4 pt-4">
      {orderPlaced && (
        <div className="mb-4 rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
          Ordered successfully.
        </div>
      )}

      {cart.length === 0 && !orderPlaced ? (
        <p className="text-sm text-slate-500">Your cart is empty.</p>
      ) : (
        <>
          <h2 className="text-xl font-bold">
            Total: NRs {total.toLocaleString("en-NP")}
          </h2>

          <div className="mt-4 flex gap-2">
            <button
              onClick={handleOrderNow}
              className="bg-amber-700 text-white px-4 py-2 rounded"
            >
              Order Now
            </button>

            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderSummary;