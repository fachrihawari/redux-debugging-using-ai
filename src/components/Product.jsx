export default function Product(props) {
  const { product } = props

  return (
    <div
      key={product.id}
      className="max-w-[280px] m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">
            ${product.price}
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
