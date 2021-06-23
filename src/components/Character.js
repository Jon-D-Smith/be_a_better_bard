import styled from "styled-components";

const Character = ({name, url}) => {
    return ( 
        <CharacterTab>
        <img className="headshot" src={url} />
        <h2 >{name}</h2>
        </CharacterTab>
     );
}


const CharacterTab = styled.div`
    display: flex;
    gap: 5%;
    justify-content: center;
    background-color: rgb(110, 255, 66);
    color:white;
    margin-top:1%;
`;
 
export default Character;