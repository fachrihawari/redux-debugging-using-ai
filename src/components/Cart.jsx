import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

  console.log(cartItems)

  return (
    <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded border border-gray-200 shadow-md">
      <div className="p-3">
        <h3 className="text-lg font-medium mb-2">Cart</h3>
        <div className="divide-y divide-gray-100">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 py-2">No items in cart</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.productId}
                productId={item.productId}
                quantity={item.quantity}
                product={item.product}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
