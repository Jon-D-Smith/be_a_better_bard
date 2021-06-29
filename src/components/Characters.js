import styled from 'styled-components'
import Character from './Character'
import Spells from './Spells'
import Modal from './Modal';

import axios from 'axios'
import { useEffect, useState } from 'react';
const Characters = props => {
    const [characterMap, setCharacterMap] = useState([]);
    const [characterId, setCharacterId] = useState(null);
    const [spellLists, setSpellLists] = useState();
    const [show, setShow] = useState(false);
    const [addForm, setAddForm] = useState();

    useEffect(() => {
        axios.get(`/characters/${1}`)
            .then(result => setCharacterMap(result.data.results))
    }, [])

    useEffect(() => {
        characterMap.forEach(e => {
            if (e.character_id == characterId) {
                setSpellLists(e.spell_list)
                console.log(e.spell_list.data)
            }
        })
    }, [characterId])

    const handleClick = e => {
        setCharacterId(e.character_id)
    };
    const hideModal = () => {
        setAddForm(null)
        setShow(false)
    };
    const showModal = e => {
        setAddForm(e)
        setShow(true)
    };

    // const onBlurHandler = () => {
    //     this.timeOutId = setTimeout(() => {
    //         this.setState({
    //             isOpen: false
    //         });
    //     });
    // }

    // // If a child receives focus, do not close the popover.
    // const onFocusHandler = () => {
    //     clearTimeout(this.timeOutId);
    // }

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
                    <button onClick={() => showModal('character')}>+</button>
                </div>
                <div className="box">
                    <header>
                        <h1>Spells</h1>
                    </header>
                    {!spellLists && <p> Select a Character</p>}
                    {spellLists &&
                        <>
                            <Spells spellLists={spellLists}></Spells>
                            <button onClick={() => showModal('spellList')}>+</button>
                        </>}
                </div>

            </CharacterList>
            { show && <Modal hideModal={hideModal} whoAmI={addForm} onBlur={onBlurHandler} onFocus={onFocusHandler} />}
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