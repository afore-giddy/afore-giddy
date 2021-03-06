import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import product from './product'
import review from './review'
import order from './order'
import collections from './collections'
import cart from './cart'

const reducer = combineReducers({
  user,
  product,
  review,
  order,
  collections,
  cart
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './product'
export * from './review'
export * from './order'
export * from './collections'
// export * from './cart'
