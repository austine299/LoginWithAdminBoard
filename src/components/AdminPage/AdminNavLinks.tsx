import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  const [isActive, setIsActive] = useState("dashboard");

  const HandleActiveClick = (navItems:any) => {
    setIsActive(navItems);
  };
  return (
    <div className="nav-links-container">
      <Link
        to=""
        className={isActive === "dashboard" ? "active-navbar" : " "}
        onClick={() => HandleActiveClick("dashboard")}
      >
        <i className="icon-style fa fa-dashboard" /> Dashboard
      </Link>
      <Link
        to=""
        className={isActive === "students" ? "active-navbar" : " "}
        onClick={() => HandleActiveClick("students")}
      >
        <i className="icon-style fa fa-users" /> Students
      </Link>
      <Link
        to=""
        className={isActive === "teachers" ? "active-navbar" : " "}
        onClick={() => HandleActiveClick("teachers")}
      >
        <i className="icon-style fa fa-user-o" /> Teachers
      </Link>
      <Link
        to=""
        className={isActive === "course" ? "active-navbar" : " "}
        onClick={() => HandleActiveClick("course")}
      >
        <i className="icon-style fa fa-book" /> Courses
      </Link>
      <Link
        to=""
        className={isActive === "payment" ? "active-navbar" : " "}
        onClick={() => HandleActiveClick("payment")}
      >
        <i className="icon-style fa fa-check-square-o" /> Payments
      </Link>
      <Link
        to=""
        className={isActive === "setting" ? "active-navbar" : " "}
        onClick={() => HandleActiveClick("setting")}
      >
        <i className="icon-style fa fa-cog" /> Settings
      </Link>
    </div>
  );
}

export default NavLinks;
