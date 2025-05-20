import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/Movie_search_react">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/Movie_search_react" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <Link to="/about">About</Link>
        </div>
    </nav> 
}

export default NavBar;