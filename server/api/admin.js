const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/admin/users', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
router.get('/admin/users/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findAll({
      where: {id},
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.delete('/admin/users/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    await User.destroy({
      where: {id}
    })
    res.json('deleted')
  } catch (err) {
    next(err)
  }
})
