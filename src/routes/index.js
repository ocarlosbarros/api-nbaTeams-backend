const routes = require('express').Router();

const TeamsController = require('../controllers/TeamsController');

routes.get('/', TeamsController.getAll);

module.exports = routes;
