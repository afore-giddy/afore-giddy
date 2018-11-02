import axios from 'axios'

//Action Types
const GET_SELECTED_COLLECTION = 'GET_SELECTED_COLLECTION'
const GET_COLLECTIONS = 'GET_COLLECTIONS'

//Initial State
export const collectionState = {
  selectedCollection: [
    {
    "name": "test",
    "description": "",
    "products": [
        {
          make: '',
          price: '$',
          collection: {name: ''},
          imageArray: [{default: ''}],
          reviews: []
        },
        {
          make: '',
          price: '$',
          collection: {name: ''},
          imageArray: [{default: ''}],
          reviews: []
        },
        {
          make: '',
          price: '$',
          collection: {name: ''},
          imageArray: [{default: ''}],
          reviews: []
        }
      ]
    }
  ],
  collections: []
}


//Action Creators
export const getSelectedCollection = selectedCollection => ({
  type: GET_SELECTED_COLLECTION,
  selectedCollection
})

export const getCollections = collections => ({
  type: GET_COLLECTIONS,
  collections
})

//Thunk
export const fetchSelectedCollection = (id) => async dispatch => {
  let res = await axios.get(`/api/admin/collections/${id}`)
  let collection = res.data
  dispatch(getSelectedCollection(collection))
}

export const fetchCollections = () => async dispatch => {
  let res = await axios.get('/api/collections')
  let collections = res.data
  dispatch(getCollections(collections))
}

//Reducer
const collectionReducer = (state = collectionState, action) => {
  switch (action.type) {
    case GET_SELECTED_COLLECTION:
      return {...state, selectedCollection: action.selectedCollection}
    case GET_COLLECTIONS:
      return {...state, collections: action.collections}
    default:
      return state
  }
}

export default collectionReducer
