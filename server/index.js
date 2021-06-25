require("dotenv").config();

const path = require("path");
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const { json } = require("body-parser");

const port = process.env.SERVER_PORT;
const app = express();

const server = require('http').createServer(app);

const { getSpellListById } = require('./controllers/spellController');

app.use(json());

app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database Connected");
  })
  .catch(err => console.log(err));

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7
//     }
//   })
// );

//SPELLS ENDPOINT
app.post("/characters/:id", getSpellListById);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

server.listen(port, console.log(`Listening on ${port}`));