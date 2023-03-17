const { Student, Course } = require('../models')

const GetAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({})
    res.send(students)
  } catch (error) {
    throw error
  }
}
const GetStudentByPk = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id, {})
    res.send(student)
  } catch (error) {
    throw error
  }
}
const GetAllStudentsByCourseId = async (req, res) => {
  try {
    const id = req.params.course_id
    const course = await Course.findByPk(id, {
      include: [
        {
          model: Student,
          as: 'courses',
          through: { attributes: ['grade'] }
        }
      ]
    })
    res.send(course)
  } catch (error) {
    throw error
  }
}

const CreateStudent = async (req, res) => {
  try {
    const student = await Student.create({ ...req.body })
    res.send(student)
  } catch (error) {
    throw error
  }
}
const DeleteStudent = async (req, res) => {
  try {
    await Student.destroy({ where: { id: req.params.student_id } })
    res.send({
      message: `Deleted Student with an id of ${req.params.student_id}`,
      payload: req.params.student_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStudents,
  GetStudentByPk,
  GetAllStudentsByCourseId,
  CreateStudent,
  DeleteStudent
}
