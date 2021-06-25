module.exports = {

  // gets all of spell lists ber character id
  getSpellListById: (req, res) => {
    const { character_id } = req.body;
    req.app
      .get("db")
      .chat.get_spell_list_by_id(req_id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err))
  }
};