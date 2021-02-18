const express = require('express');

const session = require('express-session');

const { Router } = express;
const jobRoutes = require('./jobRoutes');
const userRoutes = require('./userRoutes');
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.use(session);

// Add routes
routes.all(/\/job/, jobRoutes);
routes.all(/\/user/, userRoutes);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
