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
display: flex;
justify-content: center;
/* box-shadow:0px 0px 4px rgb(110, 255, 66); */
min-height: 600px;
`;

export default Home;