import { useCart } from "../../context/CartContext";

function OrderSummary() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.quantity * 12.99,
    0
  );

  return (
    <div className="border-t mt-4 pt-4">

      <h2 className="text-xl font-bold">
        Total: ${total.toFixed(2)}
      </h2>

      <button
        onClick={clearCart}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Clear Cart
      </button>

    </div>
  );
}

export default OrderSummary;