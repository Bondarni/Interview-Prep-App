'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsToMany(models.Student, {
        foreignKey: 'courseId',
        as: 'courses',
        through: models.Student_Course
      })
      Course.hasOne(models.Grade, {
        foreignKey: 'courseId',
        as: 'course_grade'
      })
    }
  }
  Course.init({
    name: DataTypes.STRING,
    gradeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
  });
  return Course;
};