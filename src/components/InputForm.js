import styled from "styled-components";
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { modalShowHide, setForm } from "../ducks/modalReducer";

const InputForm = props => {
  const { hideModal, whoAmI, innerRef, handleOutsideClick, characterId } = props
  // const [inputs, setInputs] = useState({
  //   name: "",
  //   characterId: props.characterId,
  //   image: null,
  //   color: null,
  // });

  // useEffect(() => {
  //   window.addEventListener('click', handleOutsideClick,);
  //   return () => window.removeEventListener('click', handleOutsideClick);
  // }, [])

  // const onChange = e => {
  //   setInputs({ ...inputs, [e.target.name]: e.target.value });
  // };

  // const submitEdit = e => {
  //   e.preventDefault();
  //   console.log(inputs)
  //   // const { display_name, avatar, blizzard, epic, ps4, riot, steam, xbox } = inputs;
  //   // axios
  //   //   .put("/users/update", { display_name, avatar, blizzard, epic, ps4, riot, steam, xbox })
  //   //   .then(() => {
  //   //     props.closeEdit();
  //   //   });
  // };

  return (
    // <ModalBody className="modal" >
    <>
      <h3>{whoAmI}</h3>
      {/* <div>
        <p>Display Name</p>
        <input
          name="name"
          defaultValue={props.display_name}
          onChange={onChange}
        />
        <p>Display Name</p>
        <input
          name="characterId"
          defaultValue={props.display_name}
          onChange={onChange}
        />
        <p>Display Name</p>
        <input
          name="image"
          defaultValue={props.display_name}
          onChange={onChange}
        />
      </div>
      <div>{props.class}</div> */}
    </>
  );
}

const mapStateToProps = state => state;

// const ModalBody = styled.div`
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     padding: 57px;
//     align-items: center;
//     height: 285px;
//     width: 205px;
//     background: blue;
//     border-radius: 5%;
//     border: 1px solid black;
//     animation: fade-in 0.3s
// `;

// export default connect(mapStateToProps)(InputForm);
export default InputForm;