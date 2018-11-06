const router = require('express').Router()
const {Order, Product, User, OrderProduct} = require('../../db/models')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
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
router.post('/', async (req, res, next) => {
  try {
    const order = await Order.create({
      status: req.body.status,
      userId: req.body.userId,
      total: req.body.total
    })

    // console.log('req.body', req.body)

    let status = await stripe.charges.create({
      amount: Number(order.total),
      currency: 'usd',
      description: req.body.description,
      source: req.body.id
    })

    // const orderId = order.id
    // const cart = req.body.cart
    // cart.forEach(async product => {
    //   await OrderProduct.create({
    //     quantity: product.quantity,
    //     finalPrice: product.finalPrice,
    //     orderId: orderId,
    //     productId: product.id
    //   })
    // })

    res.send(order)
  } catch (err) {
    next(err)
  }
})

//update order
router.put('/orders/:id', async (req, res, next) => {
  try {
    const updated = await Order.findById(req.params.id)
    await updated.update(req.body)

    !updated
      ? res.status(404).send('There is no order by that id to update!')
      : res.send(updated)
  } catch (err) {
    next(err)
  }
})
