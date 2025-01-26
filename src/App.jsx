import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './store/productSlice'

function App() {
  const dispatch = useDispatch()

  // 1. Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  // 2. Get the items from the store
  const items = useSelector(state => {
    return state.product.items
  })
  
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {/* 3. Render the products */}
        {items.map(item => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </>
  )
}

export default App
