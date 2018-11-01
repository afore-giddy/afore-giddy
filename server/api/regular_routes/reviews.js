const router = require('express').Router()
const {Review} = require('../../db/models')
module.exports = router

//get by featured
router.get('/featured', async (req, res, next) => {
  try {
    const featuredReviews = await Review.findAll({
      where: {
        isFeatured: true
      }
    })

    !featuredReviews ? res.sendStatus(404) : res.send(featuredReviews)
  } catch (err) {
    next(err)
  }
})

//create new review
router.post('/', async (req, res, next) => {
  try {
    res.send(await Review.create(req.body))
  } catch (err) {
    next(err)
  }
})

//update review
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await review.findById(req.params.id)
    await updated.update(req.body)

    !updated ? res.status(404).send('There is no review by that id to update!') : res.send(updated)
  } catch (err) {
    next(err)
  }
})

