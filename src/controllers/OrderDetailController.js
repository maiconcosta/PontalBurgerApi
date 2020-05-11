const { Item, Order, Payment, Status } = require('../models')

module.exports = {
  async index (req, res) {
    const { id } = req.params

    await Order.findOne({
      include: [
        {
          model: Item,
          as: 'items',
          through: { attributes: ['count'] }
        },
        Payment,
        Status
      ],
      where: {
        id: id
      }
    }).then((order) => {
      return res.json(order)
    }).catch((err) => {
      return res.status(400).json({ err })
    })
  }
}
