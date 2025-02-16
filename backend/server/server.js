const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Get all names
app.get('/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';

  const sqlQuery = 'SELECT * FROM firsttable WHERE LOWER(name) LIKE $1';
  const values = [`%${query}%`];

  pool.query(sqlQuery, values, (err, dbRes) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const data = dbRes.rows; // `dbRes.rows` contains the fetched data
    res.json(data);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
