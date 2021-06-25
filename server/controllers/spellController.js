const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
});
module.exports = {


  getSpellListById:  async (req,res) => {
    const {id} = req.params
    try{
      const result = await pool.query(`
      SELECT sl.*, s.* 
      FROM SPELL_LIST sl 
      INNER JOIN SPELLS s ON sl.spell_id = s.spell_id
      WHERE character_id = ${id} order by spell_list_id`);

      const results = { 'results': (result) ? result.rows : null};
      res.json( results );
    } catch (err) {
      console.error(err);
      res.json("Error " + err);
    }
  }
  ,

  getSpellList: async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM spells');
      const results = { 'results': (result) ? result.rows : null};
      res.json( results );
    } catch (err) {
      console.error(err);
      res.json("Error " + err);
    }
  }
};