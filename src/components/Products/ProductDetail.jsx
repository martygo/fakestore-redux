import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { fetchProduct, removeProduct } from "../../redux/actions/ProductActions"

function ProductDetail () {
  const product = useSelector((state) => state.product)
  const { title, description } = product

  const { productId } = useParams()
  const dispacth = useDispatch()

  const fetchProductItem = async () => {
    dispacth(fetchProduct(productId))
  }

  useEffect(() => {
    if (productId && productId !== "") fetchProductItem()

    return () => dispacth(removeProduct())
  }, [productId])

  return (
		<main className="container">
			<div className="py-5 text-center">
				<h2>{title}</h2>
				<p className="lead">{description}</p>

				<button className="w-10 btn btn-primary btn-lg" type="submit">
					Add to cart
				</button>
			</div>
		</main>
  )
}

export default ProductDetail
