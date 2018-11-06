/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')
const Product = db.model('product')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
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

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('123')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')

describe('Product Model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctMake', () => {
      let car

      beforeEach(async () => {
        car = await Product.create({
          make: 'Batmobile',
          price: 1222424,
          imageArray: [
            'https://qph.fs.quoracdn.net/main-qimg-dcbc1b57b956a7647406c0bc65086c2f'
          ],
          onSale: false,
          isFeatured: true,
          description: '65478 Beilfuss Center',
          maxSpeed: 100,
          engineType: 'V8',
          transmission: 'Standard',
          acceleration: 3,
          colors: 'White'
        })
      })

      it('returns true if the password is correct', () => {
        expect(car.correctMake('Batmobile')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(car.correctMake('NotBatMobile')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
