import { ProductActionTypes } from "../constants/ProductActionTypes"

const initialState = {
  products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload }
    default:
      return state
  }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }
    case ProductActionTypes.REMOVE_PRODUCT:
      return { }
    default:
      return state
  }
}
