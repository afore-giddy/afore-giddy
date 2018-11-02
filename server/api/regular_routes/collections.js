const router = require('express').Router()
const {Collection, Product} = require('../../db/models')
module.exports = router

//get all collections
router.get('/', async (req, res, next) => {
  try {
    const collections = await Collection.findAll()
    res.send(collections)
  } catch (err) {
    next(err)
  }
})

//get products by collectionId
router.get('/:id', async (req, res, next) => {
  try {
    const collectionProducts = await Product.findAll({
      where: {
        collectionId: req.params.id
      }
    })

    !collectionProducts ? res.status(404).send('That collection is not in our inventory') : res.send(collectionProducts)
  } catch (err) {
    next(err)
  }
})

