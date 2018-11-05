const router = require('express').Router()
const {User, Order, Review} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  console.log('INSIDE THE FETCH CART')

  try {
    const cart = req.user
    if (cart) {
      res.json(req.user.cart)
    } else if (!req.session.cart) {
      req.session.cart = []
      res.json(req.session.cart)
    } else {
      res.json(req.session.cart)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const item = req.body
    if (req.session.cart) {
      req.session.cart.unshift(item)
      res.json(req.session.cart)
    } else {
      req.session.cart = []
      req.session.cart.unshift(item)
      res.json(req.session.cart)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  console.log('HHHKJHFKLJDSFLKJBDSLKHFBSLDJHBKHBF')
  try {
    if (req.body.id) {
      const id = req.params.id
      // await User.update({cart: req.body}, {where: {id}})
      const updatedUser = await User.findById(id)
      // updatedUser.cart = []
      const oldCart = updatedUser.cart
      const newCart = oldCart.concat(req.body)
      updatedUser.cart = newCart
      console.log('ADDING OOOOOOOOOOOOOOOOO', newCart.length)
      await updatedUser.save()
      // console.log('THIS IS THE UPDATED USER', updatedUser)
      res.json(updatedUser)
    } else {
      console.log('REMOVING IIIIIIIIIIIIIIIII')
      const id = Number(req.params.id)
      req.session.cart = req.session.cart
        .slice(0, id)
        .concat(req.session.cart.slice(id + 1))
      res.json(req.session.cart)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:id/:id', async (req, res, next) => {
  console.log('UHUHHUHUHUHUHUHUHUHUHUH')
  try {
    const id = req.params.id
    await User.update({cart: req.body}, {where: {id}})
    const updatedUser = await User.findById(id)
    if (!updatedUser) {
      const error = Error(404, 'UserNotFound')
      error.status = 404
      return next(error)
    }
    console.log('THIS IS THE UPDATED USER', updatedUser)
    res.json(updatedUser)
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
