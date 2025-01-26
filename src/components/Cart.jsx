export default function Cart() {
  return (
    <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded border border-gray-200 shadow-md">
      <div className="p-3">
        <h3 className="text-lg font-medium mb-2">Cart</h3>
        <div className="divide-y divide-gray-100">
          {/* Cart Item */}
          <div className="py-2 flex items-center gap-2">
            <img
              src="product-image.jpg"
              alt="Product"
              className="w-12 h-12 rounded object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">Product Name</p>
              <p className="text-sm text-gray-500">$99.99</p>
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
