import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../store/cartSlice";

export default function CartItem(props) {
  const { product, quantity, productId } = props;
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(productId));
  };

  return (
    <div className="py-2 flex items-center gap-2">
      <img
        src={product.image}
        alt={product.title}
        className="w-12 h-12 rounded object-cover"
      />
      <div className="flex-1">
        <p className="text-sm font-medium">{product.title}</p>
        <p className="text-sm text-gray-500">${product.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-500">{quantity} qty</p>

        {/* Delete Button */}
        <button
          className="text-gray-400 hover:text-red-500"
          onClick={handleRemoveFromCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
          </svg>
        </button>
      </div>
    </div>
  );
}