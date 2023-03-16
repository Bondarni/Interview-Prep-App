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
      Course.belongsTo(models.Grade, {
        foreignKey: 'gradeId',
        as: 'course_grade'
      })
    }
  }
  Course.init({
    name: DataTypes.STRING,
    gradeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'grades',
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
  });
  return Course;
};