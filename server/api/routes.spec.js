/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')
const Product = db.model('product')
const Order = db.model('order')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@email.com'

    beforeEach(() => {
      return User.create({
        firstName: 'Jeanine',
        lastName: 'Cossentine',
        phoneNumber: '400-187-9525',
        creditCard: '3574672923346668',
        address: '440 Merchant Court',
        billingAddress: '65478 Beilfuss Center',
        isAdmin: false,
        email: 'cody@email.com',
        password: '123'
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')

//tests for product routes
describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const productMake = 'Aventador'

    beforeEach(() => {
      return Product.create({
        id: 1,
        make: 'Aventador',
        price: 78356.15,
        imageArray: [
          {
            silver:
              'https://en.wikipedia.org/wiki/Lamborghini_Aventador#/media/File:Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg'
          }
        ],
        onSale: true,
        isFeatured: false,
        description:
          'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        maxSpeed: 152,
        engineType: 'V12',
        transmission: 'Automatic',
        acceleration: 3.3,
        colors: 'Silver'
      })
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].make).to.be.equal(productMake)
    })
  }) // end describe('/api/products')
}) // end describe('product routes')

//admin routes specs
describe('Admin routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/admin/orders', () => {
    const status = 'Processing'

    beforeEach(() => {
      return Order.create({
        id: 1,
        total: 3029.91,
        status: 'Processing',
        items: [
          {
            id: 1,
            make: 'Grand Caravan',
            price: 78356.15,
            imageArray: [
              {red: 'http://dummyimage.com/400x400.png/dddddd/000000'}
            ],
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
      })
    })

    it('GET /api/admin/orders', async () => {
      const res = await request(app)
        .get('/api/admin/orders')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].status).to.be.equal(status)
    })
  }) // end describe('/api/admin')
}) // end describe('product routes')
