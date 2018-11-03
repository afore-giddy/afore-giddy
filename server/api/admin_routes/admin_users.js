const router = require('express').Router()
const {User} = require('../../db/models')
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

//admin routes for access to users

//get all users
router.get('/users', adminGate, idMatchGate, async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (err) {
    next(err)
  }
})

//get user by id
router.get('/users/:id', adminGate, idMatchGate, async (req, res, next) => {
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
router.delete('/users/:id', adminGate, idMatchGate, async (req, res, next) => {
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
router.put('/users/:id', adminGate, idMatchGate, async (req, res, next) => {
  try {
    const updated = await User.findById(req.params.id)
    await updated.update(req.body)

    !updated ? res.status(404).send('There is no user by that id to update!') : res.send(updated)
  } catch (err) {
    next(err)
  }
})

