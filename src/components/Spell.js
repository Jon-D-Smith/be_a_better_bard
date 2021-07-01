import styled from "styled-components";
import {useState} from 'react'
import Description from "./Description";
const Spell = ({ name, sound, soundName, instance}) => {
  
soundName = "This is a test - Test Artist"
const [isVisible, setisVisible] = useState(false)
  return (
    <SpellTab style={{ backgroundColor: 'purple' }} onClick={() => setisVisible(!isVisible)} >
      <h3 >{name}</h3>
      <div className="sound" >
        <div></div>
      <audio controls id="player"><source src={sound} type="audio/mp4" /></audio>
      {isVisible && <p className="artist">{soundName}</p>}
      {isVisible && <Description />}
      </div>
      
      
    </SpellTab>
  );
}


const SpellTab = styled.div`
    display: grid;
    grid-template-columns:.2fr 1fr;
    justify-content: space-evenly;
    background-color: rgb(110, 255, 66);
    color:white;
    margin-bottom:1rem;
    align-items: start;
    cursor: pointer;
   .sound {
     grid-template-columns: 1fr;
     grid-template-rows: 1fr 1fr;
     text-align: center;
   }
    #player {
      width: 90%;
      margin-top: 1rem;
      height: 2rem;
    }
    #artist {
      height: 1rem;
    }

    .invisible {
      display: none;
    }
`;

export default Spell;