const Sequelize = require('sequelize')
const db = require('../db')

const Collection = db.define('product', {
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Collection
