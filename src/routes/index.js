const routes = require('express').Router();

const TeamsController = require('../controllers/TeamsController');

routes.get('/teams', TeamsController.getAll);


module.exports = routes;