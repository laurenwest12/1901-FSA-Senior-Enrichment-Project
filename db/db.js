const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/lauren_senior_enrichment', {logging: false})

module.exports = db