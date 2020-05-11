const { User } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const payload = await jwt.verify(token, process.env.SECRET_KEY)
    const user = await User.findOne({ where: { id: payload.user } })

    if (!user) {
      res.status(401)
    }

    next()
  } catch (err) {
    res.status(401).json(err)
  }
}
