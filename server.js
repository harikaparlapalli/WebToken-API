const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes'); // ✅ ADD THIS
const auth = require('./middleware/auth');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api', studentRoutes);
// Optional test route
app.get('/api/protected', auth, (req, res) => {

    res.json({ message: "You are authorized" });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});