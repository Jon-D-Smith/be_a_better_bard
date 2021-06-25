require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");

const port = process.env.SERVER_PORT || 3001;
const app = express();

const { getSpellListById, getSpellList } = require('./controllers/spellController');

app.use(express.json());

// app.use(express.static(`${__dirname}/../build`));

//SPELLS ENDPOINT
app.get("/spells", getSpellList);
app.get("/characters/:id", getSpellListById);

app.listen(port, console.log(`Listening on ${port}`));