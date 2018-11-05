//admin middleware
module.exports = function adminCheck (req, res, next) {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.sendStatus(401)
  }
}

module.exports = function idMatchCheck (req, res, next) {
  if (req.user && req.user.id === req.params.userId) {
    next()
  } else {
    res.sendStatus(401)
  }
}

