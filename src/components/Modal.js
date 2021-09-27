import styled from "styled-components";

export const Modal = ({
  children,
  visible,
  setVisible,
  title,
}) => {
  if (!visible) return null;

  const modalDismiss = (e) => {
    setVisible(false);
  };

  return (
    <ModalBody id="modal">
      <div className="modal-container">
        <button onClick={() => { setVisible(false) }}>X</button>
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
      <div className="curtain" role="button" onClick={modalDismiss} tabIndex={0} aria-label="Dismiss"></div>
    </ModalBody>
  );
};

const ModalBody = styled.div`

  .modal-container {
    color: black;
    z-index: 9999;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 57px;
    height: 285px;
    width: 205px;
    animation: fade -in 0.3s;
  }

  .curtain {
    background-color: rgba(0,0,0,0.65);
    backdrop-filter: blur(4px);
    bottom: 0;
    left: 0;
    right: 0;
    top:0;
    z-index: 9998;
    position: fixed;
  }

`;
