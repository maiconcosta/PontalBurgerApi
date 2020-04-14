const { Item } = require('../models');

module.exports = {
    async index(req, res) {
        await Item.findAll()
            .then((items) => {
                return res.json(items);
            }).catch((err) => {
                return res.status(400).json(err);
            });
    },

    async create(req, res) {
        await Item.create(req.body).then((item) => {
            return res.status(201).json(item);
        }).catch((err) => {
            return res.status(400).json({ err });
        });
    },

    async delete(req, res) {
        const { id } = req.params;

        Item.destroy({
            where: {
                id: id
            }
        }).then(() => {
            return res.status(204).send();
        });
    }
}
