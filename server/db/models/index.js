const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Collection = require('./collection')
const Order = require('./order')
const OrderProduct = require('./orderProduct')

Review.belongsTo(Product)
Review.belongsTo(User)

User.hasMany(Review)
Product.hasMany(Review)

Product.belongsTo(Collection)
Collection.hasMany(Product)

User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Product, {through: OrderProduct})
Product.belongsToMany(Order, {through: OrderProduct})

module.exports = {
  User,
  Product,
  Review,
  Collection,
  Order,
  OrderProduct
}
