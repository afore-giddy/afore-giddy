const router = require('express').Router()
const {User} = require('../../db/models')
const adminCheck = require('../utilities')
module.exports = router

//admin routes for access to users

//get all users
router.get('/users', adminCheck, async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (err) {
    next(err)
  }
})

//get user by id
router.get('/users/:id', adminCheck, async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findAll({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Order
        },
        {
          model: Review
        }
      ]
    })

    !user ? res.status(404).send('That user is not in our database!') : res.send(user)
  } catch (err) {
    next(err)
  }
})

//delete user
router.delete('/users/:id', adminCheck, async (req, res, next) => {
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

//update user info
router.put('/users/:id', adminCheck, async (req, res, next) => {
  try {
    const updated = await User.findById(req.params.id)
    await updated.update(req.body)

    !updated ? res.status(404).send('There is no user by that id to update!') : res.send(updated)
  } catch (err) {
    next(err)
  }
})

