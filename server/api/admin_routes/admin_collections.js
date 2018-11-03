const router = require('express').Router()
const {Collection} = require('../../db/models')
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

//admin routes for collections

//get collection by id
router.get('/collections/:id', adminGate, idMatchGate, async (req, res, next) => {
  try {
    const collection = await Collection.findById(req.params.id)

    !collection ? res.status(404).send('That collection is not in our database!') : res.send(collection)
  } catch (err) {
    next(err)
  }
})

//delete collection
router.delete('/collections/:id', adminGate, idMatchGate, async (req, res, next) => {
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
router.post('/collections', adminGate, idMatchGate, async (req, res, next) => {
  try {
    res.send(await Collection.create(req.body))
  } catch (err) {
    next(err)
  }
})

//update collection
router.put('/collections/:id', adminGate, idMatchGate, async (req, res, next) => {
  try {
    const updated = await Collection.findById(req.params.id)
    await updated.update(req.body)

    !updated ? res.status(404).send('There is no collection by that id to update!') : res.send(updated)
  } catch (err) {
    next(err)
  }
})
