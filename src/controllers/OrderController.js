const { Item, Order } = require('../models');

module.exports = {
    async index(req, res) {
        await Order.findAll({
            include: [
                {
                    model: Item,
                    as: 'Items',
                    through: { attributes: [] },
                },
            ],
        }).then((orders) => {
            return res.json(orders);
        }).catch((err) => {
            return res.status(400).json({ err });
        });
    },

    async create(req, res) {
        const { items, ...data } = req.body;

        await Order.create(data)
            .then((order) => {
                if (items && items.length > 0) {
                    order.setItems(items);
                }

                return res.status(201).json(order);
            }).catch((err) => {
                return res.status(400).json({ err });
            });
    },

    async delete(req, res) {
        const { id } = req.params;

        Order.destroy({
            where: {
                id: id
            }
        }).then(() => {
            return res.status(204).send();
        });
    }
}