const router = require('express').Router()
const {User, Order, Review} = require('../../db/models')
const idMatchCheck = require('../utilities')
module.exports = router

router.get('/', idMatchCheck, async (req, res, next) => {
  try {
    res.json(req.user)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      billingAddress
    } = req.body
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      billingAddress
    })
    res.status(204).json(newUser)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    console.log('idddddddd: ', id)
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      billingAddress
    } = req.body
    await User.update(
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        billingAddress
      },
      {
        where: {id}
      }
    )
    const updatedUser = await User.findById(id)
    if (!updatedUser) {
      const error = Error(404, 'UserNotFound')
      error.status = 404
      return next(error)
    }
    res.json(updatedUser)
  } catch (err) {
    next(err)
  }
})

router.put('/cart/:id', idMatchCheck, async (req, res, next) => {
  try {
    const id = req.params.id
    await User.update({cart: req.body}, {where: {id}})
    const updatedUser = await User.findById(id)
    if (!updatedUser) {
      const error = Error(404, 'UserNotFound')
      error.status = 404
      return next(error)
    }
    res.json(updatedUser)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', idMatchCheck, async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findById({where: {id}})
    if (!user) {
      const error = Error(404, 'UserNotFound')
      error.status = 404
      return next(error)
    }
    await User.destroy({where: {id}})
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})
