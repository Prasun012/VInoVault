import { useCart } from "../../context/CartContext";


function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="flex items-center gap-4 border-b py-4">

      <img
        src={item.strDrinkThumb}
        alt={item.strDrink}
        className="w-20 h-20 rounded object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold">
          {item.strDrink}
        </h3>

        <p>Qty: {item.quantity}</p>

        <div className="flex gap-2 mt-2">

          <button
            onClick={() => decreaseQuantity(item.idDrink)}
          >
            -
          </button>

          <button
            onClick={() => increaseQuantity(item.idDrink)}
          >
            +
          </button>

          <button
            onClick={() => removeFromCart(item.idDrink)}
          >
            Remove
          </button>

        </div>
      </div>

    </div>
  );
}

export default CartItem;