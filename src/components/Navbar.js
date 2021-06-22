import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navigation">
            <a className="logo" href="#">Be A Better Bard</a>
            <a className="menu" href="#">Home</a>
            <a className="menu" href="#">All Spells</a>
            <a className="account menu" href="#">Profile</a>
            <Link to="/characters">
                <h2>Character</h2>
                {/* <MenuItem style={{ backgroundColor: 'rgba(20,20,20, 0.9)', color: '#ffffff', cursor: 'pointer' }} onClick={this.handleLogout}>Logout</MenuItem> */}
            </Link>
        </div>

    );
}

export default Navbar;