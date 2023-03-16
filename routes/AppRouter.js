const Router = require('express').Router()

Router.use('auth', AuthRouter)

module.exports = Router;