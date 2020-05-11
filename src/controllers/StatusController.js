const { Status } = require('../models')

module.exports = {
  async index (req, res) {
    await Status.findAll()
      .then((status) => {
        return res.json(status)
      }).catch((err) => {
        return res.status(400).json({ err })
      })
  }
}
