const router = require('express').Router()
const {Order, Product} = require('../../db/models')
const adminCheck = require('../utilities')
module.exports = router

//admin routes for orders

//get all orders
router.get('/orders', adminCheck, async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

//get order by id
router.get('/orders/:id', adminCheck, async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)

    !order ? res.status(404).send('That order is not in our database!') : res.send(order)
  } catch (err) {
    next(err)
  }
})

//delete order
router.delete('/orders/:id', adminCheck, async (req, res, next) => {
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

