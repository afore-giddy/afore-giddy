const router = require('express').Router()
const {Collection, Product} = require('../../db/models')
module.exports = router

//admin routes for collections

//get all collections
router.get('/collections', async (req, res, next) => {
  try {
    const collections = await Collection.findAll()
    res.send(collections)
  } catch (err) {
    next(err)
  }
})

//get collection and its products by id
router.get('/collections/:id', async (req, res, next) => {
  try {
    const collection = await Collection.findAll({
      where: {
        id: req.params.id
      },
      include: [{
        model: Product
      }]
    })

    !collection ? res.status(404).send('That collection is not in our database!') : res.send(collection)
  } catch (err) {
    next(err)
  }
})

//delete collection
router.delete('/collections/:id', async (req, res, next) => {
  try {
    const deleted = await Collection.destroy({
      where: {
        id: req.params.id
      }
    })

    !deleted ? res.status(404).send('There is no collection by that id to delete!') : res.send('deleted')
  } catch (err) {
    next(err)
  }
})

//create new collection
router.post('/collections', async (req, res, next) => {
  try {
    res.send(await Collection.create(req.body))
  } catch (err) {
    next(err)
  }
})

//update collection
router.put('/collections/:id', async (req, res, next) => {
  try {
    const updated = await Collection.findById(req.params.id)
    await updated.update(req.body)

    !updated ? res.status(404).send('There is no collection by that id to update!') : res.send(updated)
  } catch (err) {
    next(err)
  }
})
