import React from "react";
import logo1 from "../../images/logo1.svg";
import logo2 from "../../images/logo2.svg";
import menuIcon from "../../images/menuIcon.svg";
import search from "../../images/search.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav sticky-top w-100">
      <div className="row align-items-center w-100">
        <div className="col-11 col-md-3 d-flex justify-content-md-center">
          <img
            src={logo1}
            alt="logo"
            style={{ width: "65px", height: "65px" }}
          />
          <img
            src={logo2}
            alt="text"
            style={{ width: "120px", height: "100%" }}
          />
        </div>
        <div className="col-md-7 d-none d-md-block">
          <ul className=" d-flex gap-4 justify-content-end mb-0">
            <li className="nav-item">
              Services
              <i
                class="bi bi-chevron-down"
                style={{ fontSize: "16px", fontWeight: "800" }}
              ></i>
            </li>
            <li className="nav-item">Careers</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">
              <img
                src={search}
                alt="search-icon"
                style={{ width: "19px", height: "19px" }}
              />
            </li>
          </ul>
        </div>
        <div className="col-1 col-md-2">
          <div className="d-block d-md-none">
            <i
              className="bi bi-list fw-bolder"
              style={{ fontSize: "34px" }}
            ></i>
          </div>
          <button className="d-none d-md-block request-btn">Let's talk</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
