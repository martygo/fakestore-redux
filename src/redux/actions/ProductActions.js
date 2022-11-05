import http from "../../services/http"
import { ActionTypes } from "../constants/ActionTypes"

export const fetchProduct = () => {
  return async (dispatch) => {
    const response = await http.get("/products")
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data
    })
  }
}

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  }
}

export const removeProduct = () => {
  return {
    type: ActionTypes.REMOVE_PRODUCT
  }
}
