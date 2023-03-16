const { Student } = require('../models')

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

const CreateStudent = async (req, res) => {
  try {
    const student = await Student.create({ ...req.body })
    res.send(student)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStudents,
  GetStudentByPk,
  CreateStudent
}
