const { ItemsOrders, Order } = require('../models')
const { literal, Op } = require('sequelize')

module.exports = {
  async ordersCount (req, res) {
    const startDate = new Date(req.query.startDate)
    const endDate = new Date(req.query.endDate)

    await Promise.all([
      Order.count({
        where: {
          createdAt: {
            [Op.between]: [startDate, endDate]
          }
        }
      }),
      Order.sum('total', {
        where: {
          createdAt: {
            [Op.between]: [startDate, endDate]
          }
        }
      }),
      ItemsOrders.sum('count', {
        where: {
          createdAt: {
            [Op.between]: [startDate, endDate]
          }
        }
      })
    ]).then((values) => {
      return res.json(
        {
          count: values[0],
          totalValue: values[1],
          totalItems: values[2]
        }
      )
    }).catch((err) => {
      return res.status(400).json({ err })
    })
  },

  async lastSevenDays (req, res) {
    const startDate = new Date(req.query.startDate)
    const endDate = new Date(req.query.endDate)

    Order.findAll({
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate]
        }
      },

      attributes: [
        [literal('DATE(createdAt)'), 'date'],
        [literal('COUNT(*)'), 'orders']
      ],
      group: ['date']
    }).then((orders) => {
      return res.json(orders)
    })
  }
}
