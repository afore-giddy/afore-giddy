const router = require('express').Router()
const {Review} = require('../../db/models')
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

//admin routes for reviews

//get all reviews
router.get('/reviews', adminGate, idMatchGate, async (req, res, next) => {
  try {
    const reviews = await Review.findAll()
    res.send(reviews)
  } catch (err) {
    next(err)
  }
})

//get review by id
router.get('/reviews/:id', adminGate, idMatchGate, async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id)

    !review ? res.status(404).send('That review is not in our database!') : res.send(review)
  } catch (err) {
    next(err)
  }
})

//delete review
router.delete('/reviews/:id', adminGate, idMatchGate, async (req, res, next) => {
  try {
    const deleted = await Review.destroy({
      where: {
        id: req.params.id
      }
    })

    !deleted ? res.status(404).send('There is no review by that id to delete!') : res.send('deleted')
  } catch (err) {
    next(err)
  }
})

