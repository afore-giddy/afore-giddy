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
    type: Sequelize.ARRAY(Sequelize.JSON),
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
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5
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
      'Yellow',
      'Gold'
    ),
    allowNull: false
  }
})

module.exports = Product

Product.prototype.correctMake = function(carMake) {
  return this.make === carMake
}
