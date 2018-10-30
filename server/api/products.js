const router = require('express').Router()
const {Product} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = router

//get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
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
router.get('/:collectionId', async (req, res, next) => {
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

//get by speed
router.get('/:maxspeed', async (req, res, next) => {
  try {
    const foundProducts = await Product.findAll({
      where: {
        maxSpeed: {
          [Op.gte]: req.params.maxspeed
        }
      }
    })

    !foundProducts ? res.status(404).send('No products match your search') : res.send(foundProducts)
  } catch (err) {
    next(err)
  }
})

//get by engine type
router.get('/:enginetype', async (req, res, next) => {
  try {
    const foundProducts = await Product.findAll({
      where: {
        engineType: req.params.enginetype
      }
    })

    !foundProducts ? res.status(404).send('No products match your search') : res.send(foundProducts)
  } catch (err) {
    next(err)
  }
})

//get by gearbox
router.get('/:transmission', async (req, res, next) => {
  try {
    const foundProducts = await Product.findAll({
      where: {
        transmission: req.params.transmission
      }
    })

    !foundProducts ? res.status(404).send('No products match your search') : res.send(foundProducts)
  } catch (err) {
    next(err)
  }
})

//get by acceleration
router.get('/:acceleration', async (req, res, next) => {
  try {
    const foundProducts = await Product.findAll({
      where: {
        acceleration: {
          [Op.gte]: req.params.acceleration
        }
      }
    })

    !foundProducts ? res.status(404).send('No products match your search') : res.send(foundProducts)
  } catch (err) {
    next(err)
  }
})

//get by price
router.get('/:price', async (req, res, next) => {
  try {
    const foundProducts = await Product.findAll({
      where: {
        price: {
          [Op.gte]: req.params.price
        }
      }
    })

    !foundProducts ? res.status(404).send('No products match your search') : res.send(foundProducts)
  } catch (err) {
    next(err)
  }
})

//get by featured
router.get('/featured', async (req, res, next) => {
  try {
    const featuredProducts = await Product.findAll({
      where: {
        featured: true
      }
    })

    !featuredProducts ? res.sendStatus(404) : res.send(featuredProducts)
  } catch (err) {
    next(err)
  }
})


