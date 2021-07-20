const { Pool } = require('pg')
const bcrypt = require('bcrypt');
const saltRounds = 12;
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
});


module.exports = {

    createNewUser: async (req, res) => {
      
      
      const {email, first_name, last_name, password} = req.body
      
      try {
        const hash = await bcrypt.hash(password, saltRounds)
        await pool.query(`INSERT INTO users(email, first_name, last_name, password) VALUES($1, $2, $3, $4)`, [email, first_name, last_name, hash]);
        res.json( { msg: "User created successfully"})
      } catch (err) {
        console.error(err);
        res.json("Error " + err);
      }
      
    }
    
  };