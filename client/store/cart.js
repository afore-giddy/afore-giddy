import axios from 'axios'

//Action types
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const RESET_CART = 'RESET_CART'

//Initial State
export const initialState = {
  currentCart: []
}

//Action Creators
export const getCart = cart => ({
  type: GET_CART,
  cart
})

export const addToCart = cart => ({
  type: ADD_TO_CART,
  cart
})
export const resetCart = () => ({
  type: RESET_CART
})

//Thunk
export const fetchCart = () => async dispatch => {
  let res = await axios.get('/api/cart')
  let cart = res.data
  dispatch(getCart(cart))
}

export const updateCart = () => async dispatch => {
  let res = await axios.put('/api/cart')
  let cart = res.data
  dispatch(addToCart(cart))
}

export const emptyCart = () => async dispatch => {
  let res = await axios.delete('/api/cart')
  let cart = res.data
  dispatch(resetCart(cart))
}
//Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {...state, currentCart: action.cart}
    case ADD_TO_CART:
      return {...state, currentCart: [...state.currentCart, action.cart]}
    case RESET_CART:
      return {...state, currentCart: []}
    default:
      return state
  }
}

export default cartReducer
