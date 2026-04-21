const db = require('../config/db');
exports.getAll = (callback) => {
    db.query('SELECT * FROM students', callback);
};
exports.getById = (id, callback) => {
    db.query('SELECT * FROM students WHERE id = ?', [id], callback);
};
exports.create = (student, callback) => {
    const { id, name, age, course } = student;

    db.query(
        'INSERT INTO students (id, name, age, course) VALUES (?, ?, ?, ?)',
        [id, name, age, course],
        callback
    );
};
exports.update = (id, student, callback) => {
    db.query(
        'UPDATE students SET name=?, age=?, course=? WHERE id=?',
        [student.name, student.age, student.course, id],
        callback
    );
};
exports.delete = (id, callback) => {
    db.query('DELETE FROM students WHERE id=?', [id], callback);
};