import styled from 'styled-components'
import Character from './Character'

import axios from 'axios'
import { useEffect, useState } from 'react';
const Characters = () => {
    const [characters, setCharacters] = useState(null)    
    
      
    useEffect( () => {
        axios.get(`http://localhost:3001/characters`)
        .then(result => setCharacters(result.data)) 
        }, [])
   
    return ( 
        
            <CharacterList>
                <header>
                    <h2>Characters</h2>
                </header>
               
                <Character classnName="characterTab" name={"Pringles the Bard Elf"} url={"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"}/>
                <Character name={"Tingles the Bard Elf"} url={"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"}/>
                {characters && characters.map(character => <Character key={character.name} name={character.name} url={character.url} />)}
                
                     
            </CharacterList>
        
        
     );
}


const CharacterList = styled.div`
  display: flex;
  flex-direction: column; 
  text-align: center;
  box-shadow:0px 0px 4px rgb(110, 255, 66);

  .headshot{
      height: 50px;
      width:50px;
      border-radius: 100%;
      border: 1px solid white;
      align-self: center;
  }


`;


 
export default Characters;