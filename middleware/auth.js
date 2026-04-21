const jwt = require('jsonwebtoken');
const SECRET_KEY = "harika123";
module.exports = (req, res, next) => {
    const header = req.header('Authorization');
    if (!header) {
        return res.status(401).json({ message: "Access Denied" });
    }
    try {
        const token = header.split(" ")[1];
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified;
        next();
    } catch {
        res.status(400).json({ message: "Invalid Token" });
    }
};