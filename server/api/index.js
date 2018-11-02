const router = require('express').Router()
module.exports = router

//regular routes
router.use('/users', require('./regular_routes/users'))
router.use('/products', require('./regular_routes/products'))
router.use('/orders', require('./regular_routes/orders'))
router.use('/reviews', require('./regular_routes/reviews'))
router.use('/collections', require('./regular_routes/collections'))

//admin routes
router.use('/admin', require('./admin_routes/admin_users'))
router.use('/admin', require('./admin_routes/admin_collections'))
router.use('/admin', require('./admin_routes/admin_products'))
router.use('/admin', require('./admin_routes/admin_orders'))
router.use('/admin', require('./admin_routes/admin_reviews'))

//stripe routes

// router.use('/stripe', require('./stripe/'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
