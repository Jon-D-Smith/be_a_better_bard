import styled from 'styled-components'
import Character from './Character'
import Spells from './Spells'

import axios from 'axios'
import { useEffect, useState } from 'react';
const Characters = props => {
    // const [characters, setCharacters] = useState(null);
    const [activeCharacter, setActiveCharacter] = useState(0);
    const [spellLists, setSpellLists] = useState([]);
    const { characterMap } = props;


    // useEffect(() => {
    //     axios.get(`http://localhost:3001/characters`, { id: 0 })
    //         .then(result => setSpellLists(result.data))
    // }, [])

    const handleClick = (e,i) => {
        console.log(i)
        setActiveCharacter(i.i)
    };

    const characterList = characterMap.map((e, i) => {
        return (
            
            
                <Character
                    key={i}
                    name={e.name}
                    url={e.url}
                    color={e.color}
                //  spells={e.spells}
                    handleClick={() => handleClick(e,i={i})}
                />
           
        );
    });


    return (

        <CharacterList>
            <div className="box">
                <header>
                    <h1>Characters</h1>
                </header>
                <div>
                    {/* {console.log(characterMap)} */}


                    {/* <Character classnName="characterTab" name={"Pringles the Bard Elf"} url={"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"} color="#144" />
                <Character name={"Tingles the Bard Elf"} url={"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"} color="#166" />
                {characters.lenth && characters.map(character => <Character key={character.name} name={character.name} url={character.url} color={character.color} />)} */}
                </div>
                {characterList}
            </div>
            <div className="box">
                <header>
                    <h1>Spells</h1>
                </header>
                <Spells characterMap={characterMap} characterKey={activeCharacter}></Spells>
            </div>

        </CharacterList>


    );
}


const CharacterList = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  text-align: center;
  
  .box{
      flex-direction: column;
      margin: 1em;
  }
  .headshot{
      height: 50px;
      width:50px;
      border-radius: 100%;
      align-self: center;
  }


`;

export default Characters;