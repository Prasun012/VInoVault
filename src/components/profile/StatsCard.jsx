import { useCart } from "../../context/CartContext";

function StatsCard() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="grid grid-cols-3 gap-4 bg-sl">

      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h3 className="text-3xl font-bold">{totalItems}</h3>
        <p>Cart Items</p>
      </div>

      {/* <div className="bg-white rounded-lg shadow p-6 text-center">
        <h3 className="text-3xl font-bold">0</h3>
        <p>Favorites</p>
      </div> */}

      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h3 className="text-3xl font-bold">0</h3>
        <p>Orders</p>
      </div>

    </div>
  );
}

export default StatsCard;