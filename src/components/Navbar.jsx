import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-green-500 text-xl font-bold">
              Tokopedia Clone
            </span>
          </a>

          {/* Search Bar */}
          <div className="flex-1 mx-8">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <div className="cart-container relative">
              <button
              onClick={toggleCart}
                className="flex items-center text-gray-700 hover:text-green-500 relative"
              >
                <FaShoppingCart className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </button>
              {isCartOpen && <Cart />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
