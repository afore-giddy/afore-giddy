import {expect} from 'chai'
import {fetchAllProducts, fetchSingleProduct} from './product'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {
    allProducts: [],
    selectedProduct: { reviews: [] }
  }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchAllProducts', () => {
    it('eventually dispatches the GET ALL PRODUCTS action', async () => {
      const fakeProduct = [
        {
        id: 1,
        make: 'Grand Caravan',
        price: 78356.15,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
        onSale: true,
        isFeatured: false,
        description:
          'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        collectionId: 2,
        maxSpeed: 152,
        engineType: 'V12',
        transmission: 'Automatic',
        acceleration: 3.3,
        colors: 'Red'
      },
      {
        id: 2,
        make: 'Insight',
        price: 80642.28,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
        onSale: true,
        isFeatured: false,
        description:
          'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        collectionId: 2,
        maxSpeed: 278,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 4.7,
        colors: 'Silver'
      }
      ]
      mockAxios.onGet('/api/products').replyOnce(200, fakeProduct)
      await store.dispatch(fetchAllProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_ALL_PRODUCTS')
      expect(actions[0].allProducts).to.be.deep.equal(fakeProduct)
    })
  })

  describe('fetchAllProducts', () => {
    it('eventually dispatches the GET ALL PRODUCTS action', async () => {
      const fakeProduct = [
        {
        id: 1,
        make: 'Grand Caravan',
        price: 78356.15,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
        onSale: true,
        isFeatured: false,
        description:
          'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        collectionId: 2,
        maxSpeed: 152,
        engineType: 'V12',
        transmission: 'Automatic',
        acceleration: 3.3,
        colors: 'Red'
      }
      ]
      mockAxios.onGet('/api/products/1').replyOnce(200, fakeProduct)
      await store.dispatch(fetchSingleProduct(1))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_SINGLE_PRODUCT')
      expect(actions[0].selectedProduct).to.be.deep.equal(fakeProduct)
    })
  })
})
