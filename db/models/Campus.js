const Sequelize = require('sequelize')
const db = require('../db')

const Campus = db.define('campus', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      notEmpty: true
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://goseecampus.com/images/big-college-campus-visit.jpg'
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      notEmpty: true
    },
    description: {
      type: Sequelize.TEXT
    }
})

module.exports = Campus