import'../App.css'
import Characters from './Characters'
import styled from 'styled-components'
const Home = () => {
  return (
    <div className="main-container">
      <Characters />
    <Spells><h1>Spell List</h1></Spells>
      <h1>Add Spell</h1>
    </div>
  );
}

const Spells = styled.div`
width: 40%;
height: 80%;
border:1px solid black ;
display: flex;
justify-content: center;
margin-top: 1%;
`;

export default Home;