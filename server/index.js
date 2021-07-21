require("dotenv").config();
const path = require("path");
const express = require("express");
const port = process.env.SERVER_PORT || 3001;
const app = express();
var cors = require('cors')

const session = require("express-session");
const sessionConfig = {
    name: 'session',
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure:true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7

    }
}

const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  });
  


app.use(session(sessionConfig))


const { getSpellList, getSpellsBySpellListId } = require('./controllers/spellController');
const { getCharacterListById } = require('./controllers/characterController');
const { createNewUser, userLogin } = require("./controllers/authController");
app.use(cors())
app.use(express.json());

// app.use(express.static(`${__dirname}/../build`));

//SPELLS ENDPOINT
app.get("/spells", getSpellList);
app.get("/spells/:id", getSpellsBySpellListId);
app.get("/characters/:id", getCharacterListById);
app.post('/users/create', createNewUser);
app.post('/login', userLogin)
app.get('/loginTest', async (req, res) => {
    const {user_id} = req.session
    const user = await pool.query(`SELECT * FROM users WHERE user_id = $1`, [user_id])
    console.log(user_id)
    res.send(user.rows[0].first_name)
})

app.listen(port, console.log(`Listening on ${port}`));