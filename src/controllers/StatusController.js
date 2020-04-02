const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const status = await connection('status').select('*');

        return res.json(status);
    }
}