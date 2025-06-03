const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');

// Users' project page
router.get('/project', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY date DESC');
    const projects = result.rows;
    res.render('Users/project', { projects }); // Ensure path matches your views folder
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
