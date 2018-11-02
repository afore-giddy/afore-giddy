import axios from 'axios'

const PLACE_ORDER = 'PLACE_ORDER'

const placeOrder = order => ({type: PLACE_ORDER, order})

export const postOrder = order => async dispatch => {
  try {
    await axios.post('/api/orders', order)
    dispatch(placeOrder(order))
  } catch (err) {
    console.error(err)
  }
}
