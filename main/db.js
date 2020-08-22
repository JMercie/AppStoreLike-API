const Pool = require('pg').Pool
require('dotenv').config()

// connect to db
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.PORT,
})

//routes


// module.exports = {
//   //here i'll export the routes
// }