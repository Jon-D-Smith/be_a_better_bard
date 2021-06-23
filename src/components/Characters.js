import styled from 'styled-components'
import Character from './Character'

const Characters = () => {
    return ( 
        
            <CharacterList>
                <header>
                    <h2>Characters</h2>
                </header>
               
                <Character classnName="characterTab" name={"Pringles the Bard Elf"} url={"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"}/>
                <Character name={"Tingles the Bard Elf"} url={"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"}/>
                 
                
                     
            </CharacterList>
        
        
     );
}


const CharacterList = styled.div`
  width: 20%;
  height: 80%;
  margin-top: 1%;
  margin-left: 1%;
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