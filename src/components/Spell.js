import styled from "styled-components";
import { useState } from "react";
import Description from "./Description";
import soundByte from "../spell-sound.mp3";
import { Howl, Howler } from "howler";
const Spell = ({ name, sound, soundName, instance }) => {
  sound = soundByte;
  soundName = "This is a test - Test Artist";
  const [isVisible, setisVisible] = useState(false);
  return (
    <SpellTab
      style={{ backgroundColor: "purple" }}
      onClick={() => setisVisible(!isVisible)}
    >
      <h3>{name}</h3>
      <div className='sound'>
        <div></div>
        <audio controls id='player'>
          <source src={sound} type='audio/mp3' />
        </audio>
      </div>
      <div className='soundName'>{soundName}</div>
      <div className='description'>
        {isVisible && (
          <Description
            name={instance.name}
            description={instance.description}
            components={instance.components}
            damage={instance.damage}
            time={instance.casting_time}
            duration={instance.duration}
          />
        )}
      </div>
    </SpellTab>
  );
};

const SpellTab = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  justify-content: space-evenly;
  background-color: rgb(110, 255, 66);
  color: white;
  margin-bottom: 1rem;
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
  .description {
    grid-auto-columns: 1fr 1fr 1fr;
    grid-column-start: 2;
    max-width: 80%;
  }
  .soundName {
    font-size: small;
    margin-bottom: 1rem;
  }
`;

export default Spell;
