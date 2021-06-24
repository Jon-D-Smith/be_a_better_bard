import styled from "styled-components";

const Character = ({name, url}) => {
    return ( 
        <CharacterTab>
            <div></div>
        <img className="headshot" src={url} />
        
        <h3 >{name}</h3>
        </CharacterTab>
     );
}


const CharacterTab = styled.div`
    display: grid;
    grid-template-columns: .5fr 3.5fr 8fr;
    justify-content: space-evenly;
    background-color: rgb(110, 255, 66);
    color:white;
    margin-top:1%;
`;
 
export default Character;