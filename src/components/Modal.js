import styled from "styled-components";

const Modal = props => {
  const { hideModal, whoAmI } = props

  return (
    <ModalBody >
      <h3>{whoAmI}</h3>
      <button onClick={hideModal}>test</button>
    </ModalBody>
  );
}


const ModalBody = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 57px;
    align-items: center;
    height: 285px;
    width: 205px;
    background: blue;
    border-radius: 5%;
    border: 1px solid black;
    animation: fade-in 0.3s
`;

export default Modal;