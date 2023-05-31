import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
        </button>
      </div>
      <div className="links">
        <Link to="/"> About Me </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience" onClick={() => window.scrollTo(0, document.getElementById("experience").offsetTop)}>
         Experience
        </Link>

        <Link to="/blogs"> Blogs</Link>
      </div>
    </div>
  );
}

export default Navbar;