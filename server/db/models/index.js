const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Collection = require('./collection')
const Order = require('./order')
const orderProduct = require('./orderProduct')

Review.belongsTo(Product)
Review.belongsTo(User)

User.hasMany(Review)
Product.hasMany(Review)

Product.belongsTo(Collection)
Collection.hasMany(Product)

User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Product, {through: orderProduct})
Product.belongsToMany(Order, {through: orderProduct})

module.exports = {
  User,
  Product,
  Review,
  Collection,
  Order,
  orderProduct
}
