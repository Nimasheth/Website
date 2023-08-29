import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";
import colors from "../themes/colors";


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
        <Link style={{ color: colors.grey[100]}} to="/"> Work </Link>
        <Link style={{ color: colors.grey[100]}} to="/about"> About Me </Link>
        <Link style={{ color: colors.grey[100]}} to="/blogs"> Blogs</Link>
      </div>
    </div>
  );
}

export default Navbar;