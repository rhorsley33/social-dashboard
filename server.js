const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

// Connection to DataBase
connectDB();
app.use(cors());
// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Application Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Fresh Coffee is always served on port ${PORT}`)
);
