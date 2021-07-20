import styled from 'styled-components'
import Character from './Character'
import Spells from './Spells'
import Modal from './Modal';

import axios from 'axios'
import { useEffect, useState, useRef } from 'react';
const Characters = props => {
    const [characterMap, setCharacterMap] = useState([]);
    const [characterId, setCharacterId] = useState(null);
    const [spellLists, setSpellLists] = useState();
    const [show, setShow] = useState(false);
    const [addForm, setAddForm] = useState();
    const node = useRef();

    useEffect(() => {
        axios.get(`/characters/${1}`)
            .then(result => setCharacterMap(result.data.results))
    }, [])

    useEffect(() => {
        characterMap.forEach(e => {
            if (e.character_id === characterId) {
                setSpellLists(e.spell_list)
                console.log(e.spell_list.data)
            }
        })
    }, [characterId])

    const handleClick = e => {
        setCharacterId(e.character_id)
    };

    const handleModalClick = e => {
        !show ? setAddForm(e) : setAddForm(null);
        setShow(!show);
    };

    const handleOutsideClick = e => {
        if (!e.target.closest('.modal')) handleModalClick();
    };

    const characterList = characterMap.map((e, i) => {
        return (


            <Character
                key={i}
                name={e.character_name}
                url={e.character_img}
                color={e.color}
                handleClick={() => handleClick(e, i = { i })}
            />

        );
    });


    return (
        <>
            <CharacterList>
                <div className="box">
                    <header>
                        <h1>Characters</h1>
                    </header>
                    {characterMap.length && characterList}
                    <button onClick={() => handleModalClick('character')}>+</button>
                </div>
                <div className="box">
                    <header>
                        <h1>Spells</h1>
                    </header>
                    {!spellLists && <p> Select a Character</p>}
                    {spellLists &&
                        <>
                            <Spells spellLists={spellLists}></Spells>
                            <button onClick={() => handleModalClick('spellList')}>+</button>
                        </>}
                </div>

            </CharacterList>
            { show && <Modal innerRef={node} hideModal={handleModalClick} handleOutsideClick={handleOutsideClick} whoAmI={addForm} characterId={characterId} />}
        </>


    );
}


const CharacterList = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  text-align: center;
  
  .box{
      flex-direction: column;
      margin: 1em;
  }
  .headshot{
      height: 50px;
      width:50px;
      border-radius: 100%;
      align-self: center;
  }


`;

export default Characters;