const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const StudentRouter = require('./StudentRouter')

Router.use('/auth', AuthRouter)
Router.use('/students', StudentRouter)

module.exports = Router
