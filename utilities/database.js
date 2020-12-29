const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node-complete',
  'root',
  '8ewjfd4nmud3i8e3wgrq5adiezdjp9t7j',
  { dialect: 'mysql', host: 'localhost' }
);

module.exports = sequelize;
