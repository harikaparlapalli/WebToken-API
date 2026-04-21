const studentModel = require('../models/studentModel');
exports.getStudents = (req, res) => {

    studentModel.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};
exports.getStudent = (req, res) => {
    const id = req.params.id;
    studentModel.getById(id, (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0)
            return res.status(404).json({ message: "Student not found" });
        res.json(results[0]);
    });
};
exports.createStudent = (req, res) => {
    studentModel.create(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Student added" });
    });
};
exports.updateStudent = (req, res) => {
    const id = req.params.id;
    studentModel.update(id, req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Student updated" });
    });
};
exports.deleteStudent = (req, res) => {
    const id = req.params.id;
    studentModel.delete(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Student deleted" });

    });
};