const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Collection = require('./collection')

// Review.belongsTo(Product)
Review.belongsTo(User)

User.hasMany(Review)
Product.hasMany(Review)

Product.belongsTo(Collection)
Collection.hasMany(Product)

module.exports = {
  User,
  Product,
  Review,
  Collection
}
