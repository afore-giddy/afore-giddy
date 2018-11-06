import axios from 'axios'

export const orderState = {
  allOrders: []
}

const PLACE_ORDER = 'PLACE_ORDER'

export const placeOrder = order => ({type: PLACE_ORDER, order})

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
      console.log('heeey')
      return {...state, allOrders: action.order}
    default:
      return state
  }
}

export default orderReducer
