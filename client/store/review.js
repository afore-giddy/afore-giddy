import axios from 'axios'

//Action types
const GET_FEATURED_REVIEWs = 'GET_FEATURED_REVIEWs'
const GET_ALL_REVIEWs = 'GET_ALL_REVIEWs'
const GET_PRODUCT_REVIEWS = 'GET_PRODUCT_REVIEWS'

//Initial State
export const defaultReview = {
  allReviews: [],
  featuredReviews: [
    {
      rating: '0',
      title: '',
      text: '',
      isFeatured: true,
    },
    {
      rating: '0',
      title: '',
      text: '',
      isFeatured: true,
    },
    {
      rating: '0',
      title: '',
      text: '',
      isFeatured: true,
    }
  ],
  productReviews: []
}

//Action Creators
export const getAllReviews = allReviews => ({
  type: GET_ALL_REVIEWs,
  allReviews
})

export const getFeaturedReviews = featuredReviews => ({
  type: GET_FEATURED_REVIEWs,
  featuredReviews
})

export const getProductReviews = productReviews => ({
  type: GET_PRODUCT_REVIEWS,
  productReviews
})

//Thunk
export const fetchAllReviews = () => async dispatch => {
  let res = await axios.get('/api/reviews')
  let reviews = res.data
  dispatch(getAllReviews(reviews))
}

export const fetchFeaturedReviews = () => async dispatch => {
  let res = await axios.get('/api/reviews/featured')
  let featured = res.data
  dispatch(getFeaturedReviews(featured))
}

export const fetchProductReviews = (id) => async dispatch => {
  let res = await axios.get(`/api/admin/reviews/products/${id}`)
  let reviews = res.data
  dispatch(getProductReviews(reviews))
}

//Reducer
const reviewsReducer = (state = defaultReview, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWs:
      return {...state, allReviews: action.allReviews}
    case GET_FEATURED_REVIEWs:
      return {...state, featuredReviews: action.featuredReviews}
    case GET_PRODUCT_REVIEWS:
      return {...state, productReviews: action.productReviews}
    default:
      return state
  }
}

export default reviewsReducer

