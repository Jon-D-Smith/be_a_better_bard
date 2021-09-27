import { Link } from "react-router-dom";
import styled from 'styled-components';
import Login from './Login';
import Modal from './Modal';

const Navbar = () => {


    return (
        <Navigation>
            <Logo>Be A Better Bard</Logo>

            <Link className="nav" to="home">Home</Link>
            <Link className="nav" to="/spells">All Spells</Link>
            <Link className="nav" to="/characters">Character</Link>
            {/* <Link className="nav nav-right" to="home">Profile</Link> */}
            {/* <Modal.ModalButton class={'login'} text={'Login'} /> */}

        </Navigation>
    );
}

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
  height: 5em;
  background-color: rgb(110, 255, 66);



.nav {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
}

.nav:hover {
    border-bottom: 2px solid white;
}

.nav-right{
    margin-left: auto;
    margin-right: 2%;
}
`;

const Logo = styled.h1`
color: white;
font-size: 2rem;
`;

export default Navbar;