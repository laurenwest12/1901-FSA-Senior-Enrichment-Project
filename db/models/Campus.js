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
      defaultValue: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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