import styled from 'styled-components'
import Character from './Character'
import Spells from './Spells'
import { Modal } from './Modal'

import InputForm from './InputForm';

import axios from 'axios'
import { useEffect, useState } from 'react';
const Characters = props => {
    const [characterMap, setCharacterMap] = useState([]);
    const [characterId, setCharacterId] = useState(null);
    const [spellLists, setSpellLists] = useState();
    const [addedForm, setAddedForm] = useState();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        axios.get(`/characters/${1}`)
            .then(result => setCharacterMap(result.data.results))
    }, [])

    useEffect(() => {
        characterMap.forEach(e => {
            if (e.character_id === characterId) {
                setSpellLists(e.spell_list)
            }
        })
    }, [characterId])

    useEffect(() => {
        setVisible(visible)
    }, [visible])

    const handleClick = e => {
        setCharacterId(e.character_id)
    };

    const showModal = e => {
        setAddedForm(e)
        setVisible(true)
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
                    {characterMap.length > 0 && characterList}
                    <button onClick={() => showModal('Characters')}>+</button>
                </div>
                <div className="box">
                    <header>
                        <h1>Spells</h1>
                    </header>
                    {!spellLists && <p> Select a Character</p>}
                    {spellLists &&
                        <>
                            <Spells spellLists={spellLists}></Spells>
                            <button onClick={() => showModal('Spell')}>+</button>
                        </>}
                </div>
            </CharacterList>
            <Modal title={addedForm} visible={visible} setVisible={setVisible}><div>This is where we will add stuff</div></Modal>
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