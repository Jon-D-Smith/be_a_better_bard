import styled from 'styled-components'
import Spell from './Spell'

import axios from 'axios'
import { useEffect, useState } from 'react';

const Spells = props => {
  const { spellLists} = props;

  const listLoad = (e, value) => {
    console.log(value)
    axios.get(`http://localhost:3001/spells/${value.spell_list_id}`)
        .then(data => {
          
          console.log(data)}
          
          )

  }
  
  const spellList = spellLists.map((e, i) => {
    return (

      <p onClick={() => listLoad(e,e)}>{e.name}</p>

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
`;

export default Spells;