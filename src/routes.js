const express = require('express');
const routes = express.Router();

const authMiddleware = require('./middlewares/AuthMiddleware');

const CategorieController = require('./controllers/CategorieController');
const IngredientController = require('./controllers/IngredientController');
const ItemController = require('./controllers/ItemController');
const AuthController = require('./controllers/AuthController');
const OrderController = require('./controllers/OrderController');
const OrderDetailController = require('./controllers/OrderDetailController');
const PaymentController = require('./controllers/PaymentController');
const ReportsController = require('./controllers/ReportsController');
const StatusController = require('./controllers/StatusController');

routes.get('/ingredients', authMiddleware, IngredientController.index);
routes.post('/ingredient', authMiddleware, IngredientController.create);
routes.put('/ingredient/:id', authMiddleware, IngredientController.update);
routes.delete('/ingredient/:id', authMiddleware, IngredientController.delete);

routes.get('/items', authMiddleware, ItemController.index);
routes.post('/item', authMiddleware, ItemController.create);
routes.delete('/item/:id', authMiddleware, ItemController.delete);

routes.get('/orders', authMiddleware, OrderController.index);
routes.post('/order', authMiddleware, OrderController.create);
routes.put('/order/:id', authMiddleware, OrderController.update);
routes.delete('/order/:id', authMiddleware, OrderController.delete);

routes.get('/order/:id', authMiddleware, OrderDetailController.index);

routes.get('/status', authMiddleware, StatusController.index);

routes.get('/categories', authMiddleware, CategorieController.index);

routes.get('/payments', authMiddleware, PaymentController.index);

routes.get('/reports/orders/counts', authMiddleware, ReportsController.ordersCount);
routes.get('/reports/orders/sevendays/', authMiddleware, ReportsController.lastSevenDays);

routes.get('/login', AuthController.index);
routes.post('/register', authMiddleware, AuthController.create);

module.exports = routes;