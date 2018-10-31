const router = require('express').Router()
const {User, Order, Product} = require('../db/models')
module.exports = router

//admin routes for access to users
//get all users
router.get('/users', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.send(users)
  } catch (err) {
    next(err)
  }
})

//get user by id
router.get('/users/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findAll({
      where: {id},
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })

    !user ? res.status(404).send('That user is not in our database!') : res.send(user)
  } catch (err) {
    next(err)
  }
})

//delete user
router.delete('/users/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const deleted = await User.destroy({
      where: {id}
    })

    !deleted ? res.status(404).send('There is no user by that id to delete!') : res.send('deleted')
  } catch (err) {
    next(err)
  }
})

//create new user
router.post('/users', async (req, res, next) => {
  try {
    res.send(await User.create(req.body))
  } catch (err) {
    next(err)
  }
})

//update user info
router.put('/users/:id', async (req, res, next) => {
  try {
    const updated = await User.findById(req.params.id)
    await updated.update(req.body)

    !updated ? res.status(404).send('There is no user by that id to update!') : res.send(updated)
  } catch (err) {
    next(err)
  }
})


//admin routes for orders
//get all orders
router.get('/orders', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

//get order by id
router.get('/orders/:id', async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)

    !order ? res.status(404).send('That order is not in our database!') : res.send(order)
  } catch (err) {
    next(err)
  }
})

//delete order
router.delete('/orders/:id', async (req, res, next) => {
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
