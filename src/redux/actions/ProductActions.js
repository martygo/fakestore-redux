import http from "../../services/http"
import { ProductActionTypes } from "../constants/ProductActionTypes"

export const fetchProducts = () => async (dispatch) => {
  const response = await http.get("/products")
  dispatch({ type: ProductActionTypes.FETCH_PRODUCTS, payload: response.data })
}

export const fetchProduct = (id) => async (dispatch) => {
  const response = await http.get(`/products/${id}`)
  dispatch({ type: ProductActionTypes.SELECTED_PRODUCT, payload: response.data })
}

export const removeProduct = () => {
  return {
    type: ProductActionTypes.REMOVE_PRODUCT
  }
}
