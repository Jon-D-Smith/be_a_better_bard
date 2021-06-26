import styled from 'styled-components'
import Spell from './Spell'

import axios from 'axios'
import { useEffect, useState } from 'react';

<<<<<<< HEAD
const Spells = props => {
  const { spellLists} = props;

  const listLoad = (e) => {
    console.log(e.target)
  }
  
  const spellList = spellLists.map((e, i) => {
    return (
      <p onClick={listLoad}>{e.name}</p>
=======
 
  const spellList = currentSpellList.map((e, i) => {
    // if (characterKey === i) {
    return (
      // <h1>yes</h1>
      // );
      // console.log(e);
      // e.spells.map((e, i) => {
      // console.log(e);
      // return (
      // <img className="headshot" src={e.url} />
      <Spell
        key={i}
        name={e.name}
        sound={e.sound}
        soundName={e.soundName}
        
      // soundbite={e.sound}
      // url={e.url}
      // color={e.color}
      // spells={e.spells}
      />
      // );
      // })
>>>>>>> spells
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