import axios from 'axios'

//Action types
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const GET_FEATURED_PRODUCTS = 'GET_FEATURED_PRODUCTS'

//Initial State
export const initialState = {
  allProducts: [],
  selectedProduct: [
    {
      make: '',
      price: '$',
      collection: {name: ''},
      imageArray: [{default: ''}],
      reviews: []
    }
  ],
  featuredProducts: [
    {
      make: '',
      price: '$55',
      collection: {name: ''},
      imageArray: [{default: ''}],
      reviews: []
    },
    {
      make: '',
      price: '$100',
      collection: {name: ''},
      imageArray: [{default: ''}],
      reviews: []
    },
    {
      make: '',
      price: '$25',
      collection: {name: ''},
      imageArray: [{default: ''}],
      reviews: []
    }
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

export const getFeaturedProducts = featuredProducts => ({
  type: GET_FEATURED_PRODUCTS,
  featuredProducts
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

export const fetchFeaturedProducts = () => async dispatch => {
  let res = await axios.get('/api/products/featured')
  console.log('featured res', res)
  let featured = res.data
  dispatch(getFeaturedProducts(featured))
}

//Reducer
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, allProducts: action.allProducts}
    case GET_SINGLE_PRODUCT:
      return {...state, selectedProduct: action.selectedProduct}
    case GET_FEATURED_PRODUCTS:
      return {...state, featuredProducts: action.featuredProducts}
    default:
      return state
  }
}

export default productsReducer
