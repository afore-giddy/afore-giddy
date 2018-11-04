const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  // console.log('INSIDE THE FETCH CART', req.user)

  try {
    if (!req.session.cart) {
      req.session.cart = []
    }
    res.json(req.session.cart)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const item = req.body
    req.session.cart.unshift(item)
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    req.session.cart = req.session.cart
      .slice(0, id)
      .concat(req.session.cart.slice(id + 1))
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    req.session.cart = []
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
})
