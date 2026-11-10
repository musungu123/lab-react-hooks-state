import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { sampleProducts } from './components/ProductList'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('All')

  const toggleDarkMode = () => {
    setDarkMode((previousDarkMode) => !previousDarkMode)
  }

  const handleAddToCart = (product) => {
    setCart((previousCart) => [...previousCart, product])
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const filteredProducts = category === 'All'
    ? sampleProducts
    : sampleProducts.filter((product) => product.category === category)

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

      <label htmlFor="category-filter">Filter by Category: </label>
      <select id="category-filter" value={category} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList products={filteredProducts} addToCart={handleAddToCart} />
      <Cart cartItems={cart} />
    </div>
  )
}

export default App
