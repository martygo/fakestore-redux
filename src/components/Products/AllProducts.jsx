import React from "react"
import { useDispatch } from "react-redux"
import axios from "axios"

import { fetchProduct } from "../../redux/actions/ProductActions"

import ProductItem from "./ProductItem"

function AllProducts () {
  const dispacth = useDispatch()

  const getProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err)
      })

    dispacth(fetchProduct(response.data))
  }

  React.useEffect(() => {
    getProducts()
  }, [])

  return (
		<main>
			<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
				<ProductItem />
			</div>
		</main>
  )
}

export default AllProducts
