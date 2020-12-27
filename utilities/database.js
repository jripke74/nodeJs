const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: '8ewjfd4nmud3i8e3wgrq5adiezdjp9t7j'
});

module.exports = pool.promise();
