import axios from 'axios'

//Action types
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

//Initial State
const initialState = {
  allProducts: [],
  selectedProduct: [
    {make: '', price: '$', imageArray: [{default: ''}], reviews: []}
  ]
}

//Action Creators
export const getAllProducts = allProducts => ({
  type: GET_ALL_PRODUCTS,
  allProducts
})
export const getSingleProduct = selectedProduct => ({
  type: GET_SINGLE_PRODUCT,
  selectedProduct
})

//Thunk
export const fetchAllProducts = () => async dispatch => {
  let res = await axios.get('/api/products')
  let products = res.data
  dispatch(getAllProducts(products))
}

export const fetchSingleProduct = productId => async dispatch => {
  let res = await axios.get(`/api/products/${productId}`)
  let product = res.data
  dispatch(getSingleProduct(product))
}

//Reducer
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, allProducts: action.allProducts}
    case GET_SINGLE_PRODUCT:
      return {...state, selectedProduct: action.selectedProduct}
    default:
      return state
  }
}

export default productsReducer
