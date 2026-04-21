const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', 
    database: '24wh1a05c8_harika'
});
db.connect((err) => {
    if (err) {
        console.error('DB connection failed:', err);
    } else {
        console.log('Connected to MySQL');
    }
});
module.exports = db;

