const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Get all data from search
app.get('/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || ''; //get query set to lowercase
  const sqlQuery = 'SELECT * FROM firsttable FULL JOIN locations ON firsttable.id = locations.company_id WHERE LOWER(firsttable.name) LIKE $1 or LOWER(firsttable.description) LIKE $1';
  const values = [`%${query}%`];

  pool.query(sqlQuery, values, (err, dbRes) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const data = dbRes.rows; 
    res.json(data);
  });
});

// get images
const path = require('path');
app.use('/images', express.static('../images')); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
