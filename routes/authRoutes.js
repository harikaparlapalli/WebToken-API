const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = "harika123";
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username !== "admin" || password !== "1234") {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});
module.exports = router;