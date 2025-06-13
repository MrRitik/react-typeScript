import { Link } from "react-router-dom";
import "../CSS/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My App</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/context">Context</Link>
        <Link to="/event">Event</Link>
        <Link to="/class">Class Funcation</Link>
        <Link to="/form">Form</Link>
        <Link to="/hook">Hook</Link>
        <Link to="/user/101">User 101</Link>
      </div>
    </nav>
  );
};

export default NavBar;
