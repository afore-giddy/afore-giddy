const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cart = req.session.cart
    if (cart.length < 1) {
      const error = Error(404, 'Your Cart Is Empty')
      error.status = 404
      return next(error)
    }
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const item = req.body
    const cart = req.session.cart
    req.session.cart = cart.push(item)
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    req.session.cart = []
    res.end()
  } catch (err) {
    next(err)
  }
})
