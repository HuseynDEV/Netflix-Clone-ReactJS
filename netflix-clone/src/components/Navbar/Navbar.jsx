import react, { useEffect, useState } from "react";
import "./Navbar.css";

import img from "../../logo/img(2).png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className={`navbar ${show && "show_nav"}`}>
      <div className="navbarWrapper">
        <div className="left">
          <Link to="/">
            <img className="logo" src={img} alt="" />
          </Link>
        </div>
        <div className="right">
          <Link to="/sign">
            <button className="join">JOIN NOW</button>
          </Link>

          <button className="signOut">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
