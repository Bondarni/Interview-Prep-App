const Router = require('express').Router()
const controller = require('../controllers/CourseController')
const middleware = require('../middleware')

Router.get('/all', controller.GetAllCourses)

Router.get('/:id', controller.GetCourseByPk)

Router.get('/student/:student_id', controller.GetAllCoursesByStudentId)

Router.post(
  '/newcourse',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCourse
)
Router.delete(
  '/delete/:course_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCourse
)
module.exports = Router
