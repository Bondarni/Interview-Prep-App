const { Student } = require('../models')

const GetAllStudents = async (req, res) => {
  try {
    const cars = await Student.findAll({})
    res.send(cars)
  } catch (error) {
    throw error
  }
}
