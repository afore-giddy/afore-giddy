const router = require('express').Router()
const {Order, Product, User} = require('../../db/models')
module.exports = router

//routes for orders

//user gets all of their orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.user.id
      }
    })
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

//create new order
router.post('/orders', async (req, res, next) => {
  try {
    res.send(await Order.create(req.body))
  } catch (err) {
    next(err)
  }
})

//update order
router.put('/orders/:id', async (req, res, next) => {
  try {
    const updated = await Order.findById(req.params.id)
    await updated.update(req.body)

    !updated ? res.status(404).send('There is no order by that id to update!') : res.send(updated)
  } catch (err) {
    next(err)
  }
})
