import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import axios from "axios"

import { removeProduct, selectedProduct } from "../../redux/actions/ProductActions"

function ProductDetail () {
  const product = useSelector((state) => state.product)
  const { title, description } = product

  const { productId } = useParams()
  const dispacth = useDispatch()

  const fetchProductItem = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err)
      })

    dispacth(selectedProduct(response.data))
  }

  React.useEffect(() => {
    if (productId && productId !== "") fetchProductItem()

    return () => {
	  dispacth(removeProduct())
    }
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
