import styled from 'styled-components'
import Spell from './Spell'

import axios from 'axios'
import { useEffect, useState } from 'react';

const Spells = props => {
  const { spellLists} = props;
  const [spells, setSpells] = useState([])
  

  const listLoad = (e, value) => {
    console.log(value)
    axios.get(`http://localhost:3001/spells/${value.spell_list_id}`)
        .then(data => {
          const i = data.data
          const spells = i.results
          setSpells(spells)
          
          console.log(spells)
        })

  }
  
  const spellList = spellLists.map((e, i) => {
    return (
  <>
      <h1 className="spellListHeader" onClick={() => listLoad(e,e)}>{e.name}</h1>
      
      {spells && spells.map(spell => (spell.spell_list_id == e.spell_list_id ? <Spell name={spell.name} /> : <div></div>))}

      {console.log(spellLists[0].spell_list_id)}
      </>
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