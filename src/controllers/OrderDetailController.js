const { Item, Order } = require('../models');

module.exports = {
    async index(req, res) {
        const { id } = req.params;

        await Order.findOne({
            include: [
                {
                    model: Item,
                    as: 'Items',
                    through: { attributes: [] },
                },
            ],
            where: {
                id: id
            }
        }).then((order) => {
            return res.json(order);
        }).catch((err) => {
            return res.status(400).json({ err });
        });
    }
}
