const { Course, Student } = require('../models')

const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({})
    res.send(courses)
  } catch (error) {
    throw error
  }
}

const GetCourseByPk = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id, {})
    res.send(course)
  } catch (error) {
    throw error
  }
}

const CreateCourse = async (req, res) => {
  try {
    const course = await Course.create({ ...req.body })
    res.send(course)
  } catch (error) {
    throw error
  }
}
const DeleteCourse = async (req, res) => {
  try {
    await Course.destroy({ where: { id: req.params.course_id } })
    res.send({
      message: `Deleted Course with an id of ${req.params.course_id}`,
      payload: req.params.course_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const GetAllCoursesByStudentId = async (req, res) => {
  try {
    const id = req.params.student_id;
    const student = await Student.findByPk(id, {
      include: [{
        model: Course,
        as: 'course_list',
        through: { attributes: ['grade'] }
      }]
    });
    res.send(student);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  GetAllCourses,
  GetCourseByPk,
  CreateCourse,
  DeleteCourse,
  GetAllCoursesByStudentId
}
