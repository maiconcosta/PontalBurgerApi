const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ingredients = await connection('ingredient').select('*');

        return res.json(ingredients);
    },

    async create(req, res) {
        const ingredients = req.body;
   
        const insert = await connection('ingredient').insert(ingredients);

        if(!insert) {       
            return res.status(400).json({ error: 'Failed' });    
        }

        return res.status(201).json({ success: 'Successfully inserted' });
    },

    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
   
        const update = await connection('ingredient')
            .where('id', id)
            .update({name});

        if(!update) {       
            return res.status(400).json({ error: 'Failed' });    
        }

        return res.status(200).json({ success: 'Successfully updated' });
    },

    async delete(req, res) {
        const { id } = req.params;

        await connection('ingredient').where('id', id).delete();

        return res.status(204).send();
    }
}