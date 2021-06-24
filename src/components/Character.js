import styled from "styled-components";

const Character = ({name, url}) => {
    return ( 
        <CharacterTab>
        <img className="headshot" src={url} />
        <h3 >{name}</h3>
        </CharacterTab>
     );
}


const CharacterTab = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-start: 3;
    background-color: rgb(110, 255, 66);
    color:white;
    margin-top:1%;
`;
 
export default Character;