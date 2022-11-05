import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function ProductItem () {
  const products = useSelector((state) => state.allProducts.products)

  const renderProducts = products.map((product, index) => {
    const { id, title, image, price } = product

    return (
			<div className="col-md-3 mb-2" key={index}>
				<div className="card shadow-sm">
					<img
						src={image}
						alt={title}
						className="bd-placeholder-img card-img-top"
						height="225"
					/>
					<div className="card-body">
						<p className="card-text">{title}</p>
						<div className="d-flex justify-content-between align-items-center">
							<div className="btn-group">
								<Link to={`/products/${id}`}>
									<button
										type="button"
										className="w-100 btn btn-lg btn-outline-primary"
									>
										Buy now
									</button>
								</Link>
							</div>
							<small className="text-muted">${price}</small>
						</div>
					</div>
				</div>
			</div>
    )
  })

  return <>{renderProducts}</>
}

export default ProductItem
