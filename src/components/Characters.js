import styled from 'styled-components'


const Characters = () => {
    return ( 
        
            <CharacterList>
                <header>
                    <h2>Characters</h2>
                </header>
                <CharacterTab>
                    <img className="headshot" src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png" />
                    <h3>Butters</h3>
                </CharacterTab>        
            </CharacterList>
        
        
     );
}


const CharacterList = styled.div`
  width: 20%;
  height: 80%;
  border: 1px solid black;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterTab = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 10%;
    

  .headshot{
      height: 50px;
      width:50px;
      border-radius: 100%;
      border: 1px solid white;
      
  }
`;
 
export default Characters;