const { Payment } = require('../models')

module.exports = {
  async index (req, res) {
    await Payment.findAll()
      .then((payments) => {
        return res.json(payments)
      }).catch((err) => {
        return res.status(400).json({ err })
      })
  }
}
