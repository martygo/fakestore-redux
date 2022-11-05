import React from "react"
import { useDispatch } from "react-redux"

import { fetchProduct } from "../../redux/actions/ProductActions"

import ProductItem from "./ProductItem"

function AllProducts () {
  const dispacth = useDispatch()

  React.useEffect(() => {
    dispacth(fetchProduct())
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
