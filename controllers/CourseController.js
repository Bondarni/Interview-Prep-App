const { Course } = require('../models')

const createCourse = async (req, res) => {
    try{
    const { name, gradeId } = req.body
    const courseBody = {
        name, gradeId
    }
    const course = await Course.create(courseBody)
    res.status(200).send(course)
    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = {
    createCourse
}

