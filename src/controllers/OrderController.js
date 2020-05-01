const { Item, Order, Status } = require('../models');

module.exports = {
    async index(req, res) {
        await Order.findAll({
            include: [
                {
                    model: Item,
                    as: 'items',                   
                    through: { attributes: ['count'] },
                }, 
                Status
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
                    items.map((item) => {
                        order.addItem(item.id, { through: { count: item.count }});
                    });
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