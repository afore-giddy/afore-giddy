const router = require('express').Router()
const {Review} = require('../../db/models')
module.exports = router

//admin routes for reviews

//get all reviews
router.get('/reviews', async (req, res, next) => {
  try {
    const reviews = await Review.findAll()
    res.send(reviews)
  } catch (err) {
    next(err)
  }
})

//get reviews for a product
router.get('/reviews/products/:productId', async (req, res, next) => {
  try {
    const productReviews = await Review.findAll({
      where: {
        productId: req.params.productId
      }
    })

    !productReviews ? res.status(404).send('There are no reviews for that product!') : res.send(productReviews)
  } catch (err) {
    next(err)
  }
})

//get review by id
router.get('/reviews/:id', async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id)

    !review ? res.status(404).send('That review is not in our database!') : res.send(review)
  } catch (err) {
    next(err)
  }
})

//delete review
router.delete('/reviews/:id', async (req, res, next) => {
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

