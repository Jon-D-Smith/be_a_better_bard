const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {


  getSpellListById:  async (req,res) => {
    try{
      const client = await pool.connect();
      const result = await client.query(`
      SELECT sl.*, s.* 
      FROM SPELL_LIST sl 
      INNER JOIN SPELLS s ON sl.spell_id = s.spell_id
      WHERE character_id = ${1} order by spell_list_id`);

      const results = { 'results': (result) ? result.rows : null};
      res.json( results );
      client.release();
    } catch (err) {
      console.error(err);
      res.json("Error " + err);
    }
  }
  ,

  getSpellList: async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM spells');
      const results = { 'results': (result) ? result.rows : null};
      res.json( results );
      client.release();
    } catch (err) {
      console.error(err);
      res.json("Error " + err);
    }
  }
};