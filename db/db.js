const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/donut_acadcemy',
  { logging: false }
);

module.exports = db;
