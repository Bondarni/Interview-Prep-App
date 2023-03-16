const { Course } = require('../models')

const createCourse = async (req, res) => {
    try{
    const { name, gradeId } = req.body
    const course = await Course.create({ name, gradeId })
    res.status(200).send(course)
    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = {
    createCourse
}

