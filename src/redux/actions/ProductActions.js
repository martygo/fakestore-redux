import { ActionTypes } from "../constants/ActionTypes"

export const fetchProduct = (products) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS,
    payload: products
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
