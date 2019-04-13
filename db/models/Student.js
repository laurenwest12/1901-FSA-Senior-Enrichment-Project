const Sequelize = require('sequelize')
const db = require('../db')

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 1),
    validate: {
      max: 4,
      min: 0
    }
  }

})

module.exports = Student