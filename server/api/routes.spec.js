/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')
const Product = db.model('product')
const Collection = db.model('collection')
const Review = db.model('review')

describe('Review GET routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/reviews/featured', () => {
    const testTitle = 'leading edge'
    const featured = true

    beforeEach(() => {
      return Review.create({
        id: 1,
        rating: 2,
        title: 'leading edge',
        text:
          'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
        isFeatured: true
      })
    })

    it('GET /api/reviews/featured', async () => {
      const res = await request(app)
        .get('/api/reviews/featured')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].title).to.be.equal(testTitle)
    })

    it('GET /api/reviews/featured', async () => {
      const res = await request(app)
        .get('/api/reviews/featured')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].isFeatured).to.be.equal(featured)
    })
  }) // end describe('/api/reviews/featured')
}) // end describe('Review GET routes')

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
        isFeatured: true,
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

    it('GET /api/products/featured', async () => {
      const res = await request(app)
        .get('/api/products/featured')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].isFeatured).to.be.equal(true)
    })

    it('GET /api/products/:productId', async () => {
      const res = await request(app)
        .get('/api/products/1')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].id).to.be.equal(1)
    })
  }) // end describe('/api/products')
}) // end describe('product routes')

//Collection routes specs
describe('Collection routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/collections', () => {
    const status = 'Processing'

    beforeEach(() => {
      return Collection.create({
        id: 1,
        name: 'Lambo',
        description: 'Nulla facilisi.',
        image: 'http://www.carlogos.org/logo/Lamborghini-logo-1920x1080.png'
      })
    })

    it('GET /api/collections', async () => {
      const res = await request(app)
        .get('/api/collections')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('Lambo')
    })

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
        isFeatured: true,
        description:
          'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        maxSpeed: 152,
        engineType: 'V12',
        transmission: 'Automatic',
        acceleration: 3.3,
        colors: 'Silver',
        collectionId: 1
      })
    })

    it('GET /api/collections/:id', async () => {
      const res = await request(app)
        .get('/api/collections/1')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].make).to.be.equal('Aventador')
    })
  }) // end describe('/api/collections')
}) // end describe('collection routes')
