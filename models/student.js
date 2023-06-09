'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'studentAdmin'
      })
      Student.belongsToMany(models.Course, {
        foreignKey: 'studentId',
        as: 'course_list',
        through: models.Student_Course
      })
    }
  }
  Student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students'
  });
  return Student;
};