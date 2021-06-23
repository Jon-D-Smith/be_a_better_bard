import styled from 'styled-components'


const Characters = () => {
    return ( 
        
            <CharacterList>
                <header>
                    <h2>Characters</h2>
                </header>
                <CharacterTab>
                    <img className="headshot" src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png" />
                    <h2 >Butters</h2>
                </CharacterTab>        
            </CharacterList>
        
        
     );
}

const CharacterTab = styled.div`
    display: flex;
    gap: 30%;
    justify-content: flex-start;
    justify-content: center;
    border: 1px solid black;
  .headshot{
      height: 50px;
      width:50px;
      border-radius: 100%;
      border: 1px solid white;
      
  }


 
`;

const CharacterList = styled.div`
  width: 20%;
  height: 80%;
  border: 1px solid black;
  margin-top: 1%;
  margin-left: 1%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;


 
export default Characters;