import styled from "styled-components";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { modalShowHide } from "../ducks/modalReducer";

const ModalButton = props => {
  return (
    <button onClick={() => {
      props.modalShowHide();
      if (props.compForm) {
        props.compMethod(props.compForm);
      }
    }}> {props.text} </button>
  )
}

const Modal = props => {
  const { showModal, modalShowHide } = props

  const handleHideEvent = e => {
    if (!e.target.closest('#modal') || e.target.closest('.btn-btm')) {
      modalShowHide()
      window.removeEventListener('click', handleHideEvent)
    }
  };

  useEffect(() => {
    if (showModal) {
      window.addEventListener('click', handleHideEvent)
    }
  }, [showModal]);

  return (
    <ModalBody show={showModal} id="modal" >
      <div>{props.class}</div>
      <Footer className="footer">
        <button className="btn-btm" onClick={handleHideEvent}>Close</button>
      </Footer>
    </ModalBody>
  );
}

const mapStateToProps = state => state.modal;

const ModalBody = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
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
  animation: fade -in 0.3s;
`;
const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 10%;
  width: 100%;
  text-align: end;

  .btn-btm {
    position: relative;
    right: 5%;
  }
`;

export default {
  Modal: connect(mapStateToProps, { modalShowHide })(Modal),
  ModalButton: connect(mapStateToProps, { modalShowHide })(ModalButton)
}