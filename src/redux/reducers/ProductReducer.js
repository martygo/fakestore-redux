import { ActionTypes } from "../constants/ActionTypes"

const initialState = {
  products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload }
    default:
      return state
  }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }
    case ActionTypes.REMOVE_PRODUCT:
      return { }
    default:
      return state
  }
}
