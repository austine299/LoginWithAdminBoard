import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./AdminNavLinks";

function Navbar() {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const handleNavbarToggle = () => {
    setNavbar(!navbar);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  };

  return (
    <div className="nav-container">
      <img src="asset/images/logo.png" className="admin-logo" />

      <div className="nav-desktop">
        <NavLinks />
      </div>

      <div className="profile-container">
        <div className="signout-link">
          <img
            src="asset\images\admin.jpeg"
            style={{ width: "3rem", height: "3rem", borderRadius: "100%" }}
          />
          <span style={{ display: "flex", flexDirection: "column" }}>
            <span>Admin</span>
            <Link to="/">Sign Out</Link>
          </span>
        </div>
        <span
          className="fa fa-bell-o"
          style={{
            backgroundColor: "red",
            color: "#fff",
            padding: "0.5rem",
            borderRadius: "100%",
          }}
        ></span>
      </div>

      <div className="navbar toggler-icon">
        <span
          className="navbar-toggler-icon"
          onClick={handleNavbarToggle}
        ></span>
      </div>
      <div className="sidebar-mobile">{navbar ? <NavLinks /> : <></>}</div>
    </div>
  );
}

export default Navbar;
