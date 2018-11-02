import axios from 'axios'

//Action Types
const GET_COLLECTIONS = 'GET_COLLECTIONS'

//Initial State
export const collectionState = {
  collections: []
}


//Action Creators
export const getCollections = collections => ({
  type: GET_COLLECTIONS,
  collections
})

//Thunk
export const fetchCollections = () => async dispatch => {
  let res = await axios.get('/api/collections')
  let collections = res.data
  dispatch(getCollections(collections))
}

//Reducer
const collectionReducer = (state = collectionState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return {...state, collections: action.collections}
    default:
      return state
  }
}

export default collectionReducer
