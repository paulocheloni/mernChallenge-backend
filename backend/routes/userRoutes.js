const express = require('express');

const session = require('express-session');

const { Router } = express;
const jobController = require('../controllers/jobControllers');
const createCRUDRoutesByEntity = require('./lib');
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.use(session);

// Add routes

createCRUDRoutesByEntity(routes, jobController);

module.exports = routes;
