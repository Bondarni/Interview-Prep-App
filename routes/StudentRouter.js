const Router = require('express').Router()
const controller = require('../controllers/StudentController')
const middleware = require('../middleware')

Router.get('/all', controller.GetAllStudents)

Router.get('/:id', controller.GetStudentByPk)

Router.post(
  '/newstudent',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateStudent
)

module.exports = Router
