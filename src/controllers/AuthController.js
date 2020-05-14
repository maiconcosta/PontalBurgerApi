const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  async index (req, res) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({ error: 'No headers provided' })
    }

    const [, hash] = authHeader.split(' ')
    const [email, password] = Buffer.from(hash, 'base64')
      .toString()
      .split(':')

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    if (!password) {
      return res.status(400).json({ error: 'Password is required' })
    }

    await User.findOne({
      where: {
        email
      }
    }).then(async (user) => {
      if (!user) {
        return res.status(400).json({ error: 'User not found' })
      }

      if (!await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ error: 'Login failed' })
      }

      const token = jwt.sign({ user: user.id }, process.env.SECRET_KEY, {
        expiresIn: 300
      })

      user.password = undefined

      return res.status(200).json(
        {
          message: 'Login successfully',
          token,
          user
        })
    }).catch(err => {
      return res.status(401).json(err)
    })
  },

  async create (req, res) {
    const { email, password } = req.body

    if (!email) {
      return res.status(400).json({ message: 'Email is required' })
    }

    if (!password) {
      return res.status(400).json({ message: 'Password is required' })
    }

    await User.create(req.body).then((user) => {
      user.password = undefined

      return res.status(201).json(user)
    }).catch(err => {
      return res.status(400).json(err.errors)
    })
  }
}
