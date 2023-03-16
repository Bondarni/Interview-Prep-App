const Router = require('express').Router()
const controllers = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.get('/user/:user_id',
controllers.findUserByPk)
Router.post('/', controllers.register)
Router.post('/login', controllers.signIn)
Router.get('/session', 
middleware.stripToken,
middleware.verifyToken,
controllers.checkSession)


module.exports = Router;