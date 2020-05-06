const express = require('express');
const routes = express.Router();

const CategorieController = require('./controllers/CategorieController');
const IngredientController = require('./controllers/IngredientController');
const ItemController = require('./controllers/ItemController');
const OrderController = require('./controllers/OrderController');
const OrderDetailController = require('./controllers/OrderDetailController');
const PaymentController = require('./controllers/PaymentController');
const ReportsController = require('./controllers/ReportsController');
const StatusController = require('./controllers/StatusController');

routes.get('/ingredients', IngredientController.index);
routes.post('/ingredient', IngredientController.create);
routes.put('/ingredient/:id', IngredientController.update);
routes.delete('/ingredient/:id', IngredientController.delete);

routes.get('/items', ItemController.index);
routes.post('/item', ItemController.create);
routes.delete('/item/:id', ItemController.delete);

routes.get('/orders', OrderController.index);
routes.post('/order', OrderController.create);
routes.put('/order/:id', OrderController.update);
routes.delete('/order/:id', OrderController.delete);

routes.get('/order/:id', OrderDetailController.index);

routes.get('/status', StatusController.index);

routes.get('/categories', CategorieController.index);

routes.get('/payments', PaymentController.index);

routes.get('/reports/orders/counts', ReportsController.ordersCount);
routes.get('/reports/orders/sevendays/', ReportsController.lastSevenDays);

module.exports = routes;