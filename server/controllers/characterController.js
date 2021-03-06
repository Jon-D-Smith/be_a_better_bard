const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {

  getCharacterListById: async (req, res) => {
    const { id } = req.params
    
    try {
      const result = await pool.query(`
        SELECT c.character_id, c.character_name, c.user_id, c.character_img, c.color, (
          SELECT json_agg( spell_list ) 
          FROM  (
            select distinct spell_list_id, name 
            from spell_list 
            where character_id = c.character_id) as spell_list) as spell_list
        FROM characters c
        WHERE user_id = $1
        GROUP BY c.character_id, c.character_name, c.user_id, c.character_img, c.color
      `, [id]);
      const results = { 'results': (result) ? result.rows : null };
      res.json(results);
    } catch (err) {
      console.error(err);
      res.json("Error " + err);
    }
  },

  addNewCharacterToUser: async (req, res) => {
    const { characterName, userId, characterImg, color } = req.params
    try {
      const result = await pool.query(`
        INSERT INTO characters (character_name, user_id, character_img, color) 
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `, [characterName, userId, characterImg, color]);
      const results = { 'results': (result) ? result.rows : null };
      res.json(results);
    } catch (err) {
      console.error(err);
      res.json("Error " + err);
    }
  },

  addNewListToCharacter: async (req, res) => {
    const { name, spell_id, character_id } = req.params
    try {
      const result = await pool.query(`
        INSERT INTO spell_list (name, spell_id, character_id) 
        VALUES ($1, $2, $3)
        RETURNING *
      `, [name, spell_id, character_id]);
      const results = { 'results': (result) ? result.rows : null };
      res.json(results);
    } catch (err) {
      console.error(err);
      res.json("Error " + err);
    }
  }

};