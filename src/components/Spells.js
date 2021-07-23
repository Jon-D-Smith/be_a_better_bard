import styled from 'styled-components'
import Spell from './Spell'

import axios from 'axios'
import { useEffect, useState } from 'react';

const Spells = props => {
  const { spellLists } = props;
  const [spells, setSpells] = useState([])
  const [spellListId, setSpellListId] = useState()


  const spellListIdChange = (e) => {
    if (spellListId == e.spell_list_id) {
      setSpells([])
      setSpellListId()
    } else {

      setSpellListId(e.spell_list_id)
    }

  }

  useEffect(async () => {
    if (spellListId) {
      await axios.get(`http://localhost:3001/spells/${spellListId}`)
        .then(result => setSpells(result.data.results))
    }

  }, [spellListId])


  const listOfSpells = spells.map((e, i) => {
    return (
      <Spell
        key={i}
        name={e.name}
        instance={e} />
    );
  });

  const spellList = spellLists.map((e, i) => {
    return (
      <div key={i}>
        <h1 className="spellListHeader" onClick={() => spellListIdChange(e)}>{e.name}</h1>
        {spells.length > 0 && spellListId === e.spell_list_id && listOfSpells}
      </div>
    );
  });


  return (
    <Base>
      {spellList}
    </Base>

  );
}

const Base = styled.div`
  display: flex;
  flex-direction: column; 
  text-align: center;
  
  .headshot{
      height: 50px;
      width:50px;
      border-radius: 100%;
      align-self: center;
  }

  .spellListHeader{
    background: navy;
    margin: 1rem 0;
    cursor: pointer;
  }
`;

export default Spells;