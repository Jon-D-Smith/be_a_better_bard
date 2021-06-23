import Characters from './Characters'
import styled from 'styled-components'


const Home = () => {
  return (
    <div className="main-container">
      <Characters />
    <Spells><h1>Spell List</h1></Spells>
      <h1 className="spell-btn">Add Spell</h1>
    </div>
  );
}

const Spells = styled.div`
width: 60%;
height: 80%;
display: flex;
justify-content: center;
margin-top: 1%;
box-shadow:0px 0px 4px rgb(110, 255, 66);
`;

export default Home;