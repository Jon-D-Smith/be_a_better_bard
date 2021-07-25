import Characters from './Characters'
import styled from 'styled-components'
import Spells from './Spells'

import axios from 'axios'
import { useEffect, useState } from 'react';

const Home = () => {
  const [characterMap, setCharacterMap] = useState([]);
  const [characterKey, setCharacterKey] = useState();

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/characters`)
  //     .then(result => setCharacterMap(result.data))
  // }, [])



  // const handleClose

  return (
    <div >
      {/* {console.log('test')} */}
      <Characters style={{ width: '70%' }} />
      {/* <Spells characterMap={characterMap} characterKey={0}></Spells> */}
      
      {/* <Modal show={show} handleClick={hideModal} style={{ display: 'none' }}></Modal> */}
    </div>
  );
}

// const Spells = styled.div`
// display: flex;
// justify-content: center;
// box-shadow:0px 0px 4px rgb(110, 255, 66);
// min-height: 600px;
// `;

export default Home;