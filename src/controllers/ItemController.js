const connection = require('../database/connection');

module.exports = {
    async index(req, res){
        const items = await connection('item').select('*');

        return res.json(items);
    },

    async create(req, res) {
        const { name, value } = req.body;

        const insert = await connection('item').insert({
            name,
            photo: '--',
            value
        });

        if(!insert) {       
            return res.status(400).json({ error: 'Failed' });    
        }

        return res.status(201).json({ success: 'Successfully inserted' });
    },

    async delete(req, res) {
        const { id } = req.params;

        await connection('item').where('id', id).delete();

        return res.status(204).send();
    }
}