const router = require('express').Router()
const {Order, Product} = require('../../db/models')
module.exports = router

//admin middleware
const adminGate = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.sendStatus(401)
  }
}

const idMatchGate = (req, res, next) => {
  if (req.user && req.user.id === req.params.userId) {
    next()
  } else {
    res.sendStatus(401)
  }
}

//admin routes for orders

//get all orders
router.get('/orders', adminGate, idMatchGate, async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

//get order by id
router.get('/orders/:id', adminGate, idMatchGate, async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)

    !order ? res.status(404).send('That order is not in our database!') : res.send(order)
  } catch (err) {
    next(err)
  }
})

//delete order
router.delete('/orders/:id', adminGate, idMatchGate, async (req, res, next) => {
  try {
    const deleted = await Order.destroy({
      where: {
        id: req.params.id
      }
    })

    !deleted ? res.status(404).send('There is no order by that id to delete!') : res.send('deleted')
  } catch (err) {
    next(err)
  }
})

