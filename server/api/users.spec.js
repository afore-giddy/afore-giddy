/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

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
