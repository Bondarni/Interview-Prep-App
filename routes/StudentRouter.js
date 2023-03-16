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
Router.delete(
  '/delete/:student_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteStudent
)
module.exports = Router
