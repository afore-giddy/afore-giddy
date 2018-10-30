const router = require('express').Router()
const {Product, Review, Collection} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = router

//get by featured
router.get('/featured', async (req, res, next) => {
  try {
    const featuredProducts = await Product.findAll({
      where: {
        isFeatured: true
      }
    })

    !featuredProducts ? res.sendStatus(404) : res.send(featuredProducts)
  } catch (err) {
    next(err)
  }
})

//get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [{
        model: Collection
      }]
    })
    res.send(products)
  } catch (err) {
    next(err)
  }
})

//get single product
router.get('/:productId', async (req, res, next) => {
  try {
    const foundProduct = await Product.findAll({
      where: {
        id: req.params.productId
      },
      include: [{
        model: Review
      }]
    })

    !foundProduct ? res.status(404).send('That product is not in our inventory') : res.send(foundProduct)
  } catch (err) {
    next(err)
  }
})

//get products by collectionId
router.get('/collections/:collectionId', async (req, res, next) => {
  try {
    const collectionProducts = await Product.findAll({
      where: {
        collectionId: req.params.collectionId
      }
    })

    !collectionProducts ? res.status(404).send('That collection is not in our inventory') : res.send(collectionProducts)
  } catch (err) {
    next(err)
  }
})




