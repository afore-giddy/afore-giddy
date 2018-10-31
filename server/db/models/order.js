const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  quantity: {
    type: Sequelize.INTEGER
  },
  total: {
    type: Sequelize.INTEGER
  },
  finalPrice: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed')
  }
})

module.exports = Order
