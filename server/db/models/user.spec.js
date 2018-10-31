/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

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
