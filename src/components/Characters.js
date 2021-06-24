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
                    <h1>Characters</h1>
                </header>
               
                <Character classnName="characterTab" name={"Pringles the Bard Elf"} url={"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"} color="red"/>
                <Character name={"Tingles the Bard Elf"} url={"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"} color="yellow"/>
                {characters && characters.map(character => <Character key={character.name} name={character.name} url={character.url} color={character.color} />)}
                
                     
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
      align-self: center;
  }


`;


 
export default Characters;