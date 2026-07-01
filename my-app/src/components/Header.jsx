import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const linkStyle = {
      color: "white",
      textDecoration: "none"
    };

    return(
        <header style ={{
        backgroundColor: "#222",
        padding: "15px",
        color: "white"
        }}>

        <div style={{ display: "flex", gap: "15px" }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/movies" style={linkStyle}>Movies</Link>
          <Link to="/about" style={linkStyle}>About</Link>
        </div>

        </header>
    )
}

export default Header;