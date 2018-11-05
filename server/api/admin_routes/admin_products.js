const router = require('express').Router()
const {Product} = require('../../db/models')
const adminCheck = require('../utilities')
module.exports = router

//admin routes for products

//delete order
router.delete('/products/:id', adminCheck, async (req, res, next) => {
  try {
    const deleted = await Product.destroy({
      where: {
        id: req.params.id
      }
    })

    !deleted ? res.status(404).send('There is no product by that id to delete!') : res.send('deleted')
  } catch (err) {
    next(err)
  }
})

//create new product
router.post('/products', adminCheck, async (req, res, next) => {
  try {
    res.send(await Product.create(req.body))
  } catch (err) {
    next(err)
  }
})

//update product
router.put('/products/:id', adminCheck, async (req, res, next) => {
  try {
    const updated = await Product.findById(req.params.id)
    await updated.update(req.body)

    !updated ? res.status(404).send('There is no product by that id to update!') : res.send(updated)
  } catch (err) {
    next(err)
  }
})
