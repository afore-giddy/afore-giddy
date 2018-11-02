const Sequelize = require('sequelize')
const db = require('../db')

const orderProduct = db.define('orderProduct', {
  quantity: {
    type: Sequelize.INTEGER
  },
  finalPrice: {
    type: Sequelize.INTEGER
  }
})

module.exports = orderProduct
