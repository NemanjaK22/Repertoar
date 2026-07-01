import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>Informacije o aplikaciji i autoru.</p>

      <nav>
        <Link to="app">O aplikaciji</Link> |{" "}
        <Link to="author">O autoru</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default About;