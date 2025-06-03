const express = require('express');
const router = express.Router();
const pool = require('../config/db'); // adjust your DB import
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.render('login', { error: 'Invalid credentials' }); // render login page with error
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render('login', { error: 'Invalid credentials' });
    }

    // Save session
    req.session.user = { id: user.id, email: user.email };

    // Redirect to dashboard
    res.redirect('/Admin/dashboard');
  } catch (err) {
    console.error('Login error:', err);
    res.render('login', { error: 'Server error' });
  }
});
