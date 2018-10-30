const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  make: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageArray: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  onSale: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  isFeatured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  maxSpeed: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 300
    },
    get() {
      return this.getDataValue('maxSpeed') + ' KM/H'
    }
  },
  engineType: {
    type: Sequelize.ENUM('V8', 'V12', 'Electric'),
    allowNull: false
  },
  transmission: {
    type: Sequelize.ENUM('Standard', 'Automatic'),
    allowNull: false
  },
  acceleration: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      min: 0.0,
      max: 5.0
    },
    get() {
      return this.getDataValue('accleration') + ' KM/S'
    }
  },
  colors: {
    type: Sequelize.ENUM(
      'White',
      'Black',
      'Red',
      'Blue',
      'Silver',
      'Green',
      'Yellow'
    ),
    allowNull: false
  }
})

module.exports = Product
