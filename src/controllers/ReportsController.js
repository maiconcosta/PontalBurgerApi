const { ItemsOrders, Order } = require('../models');
const { Op } = require('sequelize');

module.exports = {
    async ordersCount(req, res) {
        const startDate = new Date(req.query.startDate);
        const endDate = new Date(req.query.endDate);

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
            }),
        ]).then((values) => {
            return res.json(
                {
                    count: values[0],
                    totalValue: values[1],
                    totalItems: values[2]
                }
            );
        }).catch((err) => {
            return res.status(400).json({ err });
        });
    },
}