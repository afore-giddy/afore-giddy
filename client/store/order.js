import axios from 'axios'

export const orderState = {
  allOrders: []
}

const PLACE_ORDER = 'PLACE_ORDER'
const GET_ORDERS_BY_USER = 'GET_ORDERS_BY_USER'

export const placeOrder = order => ({type: PLACE_ORDER, order})
export const getOrder = order => ({type: GET_ORDERS_BY_USER, order})

export const getOrderByUser = userId => async dispatch => {
  try {
    const res = await axios.get('/api/orders', userId)
    dispatch(getOrder(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const postOrder = order => async dispatch => {
  try {
    await axios.post('/api/orders', order)
    dispatch(placeOrder(order))
  } catch (err) {
    console.error(err)
  }
}

const orderReducer = (state = orderState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return {...state, allOrders: [...state.allOrders, action.order]}
    case GET_ORDERS_BY_USER:
      return {...state, allOrders: action.order}
    default:
      return state
  }
}

export default orderReducer
