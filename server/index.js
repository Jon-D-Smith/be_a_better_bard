require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");

const port = process.env.SERVER_PORT || 3001;
const app = express();

const { getSpellList, getSpellsBySpellListId } = require('./controllers/spellController');
const { getCharacterListById } = require('./controllers/characterController');

app.use(express.json());

// app.use(express.static(`${__dirname}/../build`));

//SPELLS ENDPOINT
app.get("/spells", getSpellList);
app.get("/spells/:id", getSpellsBySpellListId);
app.get("/characters/:id", getCharacterListById);

app.listen(port, console.log(`Listening on ${port}`));