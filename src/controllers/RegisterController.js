const { User } = require('../models');

module.exports = {
    async create(req, res) {
        const data = req.body;
        const { email, password } = data;

        if(!email) {
            return res.status(400).json({message: 'Email is required'});
        }

        if(!password) {
            return res.status(400).json({message: 'Password is required'});
        }

        await User.create(data).then((user) => {
            return res.status(201).json(user);
        }).catch(err => {
            return res.status(400).json({ err });
        });
    },
}