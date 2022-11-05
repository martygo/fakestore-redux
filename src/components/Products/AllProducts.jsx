import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchProducts } from "../../redux/actions/ProductActions"

import ProductItem from "./ProductItem"

function AllProducts () {
  const dispacth = useDispatch()

  const getProducts = () => {
    dispacth(fetchProducts())
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
		<div className="row mb-3">
			<ProductItem />
		</div>
  )
}

export default AllProducts
