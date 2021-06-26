import styled from 'styled-components'
import Spell from './Spell'

import axios from 'axios'
import { useEffect, useState } from 'react';
const Spells = props => {
  // console.log(props);
  // console.log(propKey);
  const [currentSpellList, setCurrentSpellList] = useState([]);
  const [currentName, setCurrentName] = useState('');
  // const [spellList, setSpellList] = useState([]);
  const { characterMap } = props;
  const { characterKey } = props;
  // const currentSpellList = characterMap[characterKey].spells;

  // const spellList
  // const spellList = () => {
  //   let currentSpells = characterMap[characterKey].spells;
  //   console.log(currentSpells);
  //   return (
  //     <></>
  //   );
  // };

  const getCurrentSpellList = () => {
    if (characterMap[characterKey]) {
      setCurrentSpellList(characterMap[characterKey].spells)
      setCurrentName(characterMap[characterKey].name)
    };
  };

  useEffect(() => {
    getCurrentSpellList();
  }, [characterKey]);

 
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
    );
    // }
  });


  return (
    <Base>
      {!currentName && <p> Select a Character to view their spell list</p>}
      {currentSpellList && spellList}
    </Base>
    // <CharacterList>
    //   {console.log(characterMap)}
    //   <header>
    //     <h1>Characters</h1>
    //   </header>

    //   {/* <Character classnName="characterTab" name={"Pringles the Bard Elf"} url={"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"} color="#144" />
    //         <Character name={"Tingles the Bard Elf"} url={"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"} color="#166" />
    //         {characters.lenth && characters.map(character => <Character key={character.name} name={character.name} url={character.url} color={character.color} />)} */}
    //   {characterList}

    // </CharacterList>


  );
}

const Base = styled.div`
  display: flex;
  flex-direction: column; 
  text-align: center;
  /* box-shadow:0px 0px 4px rgb(110, 255, 66); */
  
  .headshot{
      height: 50px;
      width:50px;
      border-radius: 100%;
      align-self: center;
  }


`;

export default Spells;