import React from "react"
import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import AllProducts from "./components/Products/AllProducts"
import ProductDetail from "./components/Products/ProductDetail"

function App () {
  return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Home>
							<AllProducts />
						</Home>
					}
				/>
				<Route
					path="products"
					element={
						<Home>
							<AllProducts />
						</Home>
					}
				/>
				<Route path="products/:productId" element={<ProductDetail />} />
			</Routes>
		</>
  )
}

export default App
