const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const orders = await connection('order').select('*');

        return res.json(orders);
    },

    async create(req, res) {
        const { locale, observation, total, statusId } = req.body;
   
        const insert = await connection('order').insert({
            locale,
            observation,
            total,
            status_id: statusId
        });

        if(!insert) {       
            return res.status(400).json({ error: 'Failed' });    
        }

        return res.status(201).json({ success: 'Successfully inserted' });
    },

    async delete(req, res) {
        const { id } = req.params;

        await connection('order').where('id', id).delete();

        return res.status(204).send();
    }
}