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
      Student.hasMany(models.Course, {
        foreignKey: 'studentId',
        as: 'courses'
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