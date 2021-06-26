import styled from "styled-components";

const Spell = ({ name}) => {
  return (
    <SpellTab style={{ backgroundColor: 'purple' }}>
      <div></div>
      {/* <img className="headshot" src={url} /> */}

      <h3 >{name}</h3>
    </SpellTab>
  );
}


const SpellTab = styled.div`
    display: grid;
    grid-template-columns: .5fr 3.5fr 8fr;
    justify-content: space-evenly;
    background-color: rgb(110, 255, 66);
    color:white;
    margin-bottom:1rem;
`;

export default Spell;