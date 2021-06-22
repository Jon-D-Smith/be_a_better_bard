import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navigation">
            <a className="logo" href="#">Be A Better Bard</a>
            <a className="menu" href="#">Home</a>
            <a className="menu" href="#">All Spells</a>
            <a className="account menu" href="#">Profile</a>
            <Link to="/characters">
                <p>Character</p>
            </Link>
        </div>

    );
}

export default Navbar;