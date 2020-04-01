const express = require('express');

const routes = express.Router();

const MenuController = require('./controllers/MenuController');

routes.get('/', MenuController.index);

module.exports = routes;