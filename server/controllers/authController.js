const { Pool } = require('pg')
const bcrypt = require('bcrypt');
const session = require('express-session');
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
      
    },


    userLogin: async (req, res) => {
      const {email, password} = req.body
    try {

      const user = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])
      if(await bcrypt.compare(password, user.rows[0].password)){
        req.session.user_id = user.rows[0].user_id
        console.log(req.session)
        res.send(`${user.rows[0].first_name} Logged in`)
      }  else {
        res.send('Incorrect email or password. Please try again.')
      }
    } catch (err){
      return res.status(500).send('No such user')
    }
    
  },

  userLogout: (req, res) => {
    console.log(req.session)
    req.session.destroy()
    console.log(req.session)
    res.send('logged out')
  }
  
};