const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectionString: process.env.DATABASE_URL,
  ssl:{
    rejectUnauthorized:false,
  }
});

module.exports = pool; // ✅ Export the pool instance directly
