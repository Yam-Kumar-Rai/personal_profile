// backend/models/projectModel.js
const db = require('../config/db'); // your DB connection module

// Fetch all projects from the database
async function getAllProjects() {
  const result = await db.query('SELECT * FROM projects ORDER BY id DESC');
  return result.rows;
}

module.exports = { getAllProjects };
