SELECT sl.*, s.* 
FROM SPELL_LIST sl 
INNER JOIN SPELLS s ON sl.spell_id = s.spell_id
WHERE character_id = $1 order by spell_list_id;