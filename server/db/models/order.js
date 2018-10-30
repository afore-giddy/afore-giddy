const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  items: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  },
  total: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed')
  }
})

module.exports = Order
