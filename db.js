const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "test"
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

module.exports = db;