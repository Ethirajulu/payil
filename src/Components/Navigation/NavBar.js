import React from "react";
import "./NavBar.css";
import logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand brand" href="#">
        <img
          src={logo}
          width="35"
          height="35"
          className="d-inline-block align-top mr-2"
          alt=""
        />
        Payil
      </a>
      <div className="menu collapse navbar-collapse ml-5" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item mr-1">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item dropdown mr-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownMenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Features
            </a>
            <div className="dropdown-menu mt-3" aria-labelledby="dropdownMenu">
              <a className="dropdown-item" href="#">
                Classroom
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Innovations
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Blog
              </a>
            </div>
          </li>
          <li className="nav-item  mr-1">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <strong className="d-inline-block">
              <FontAwesomeIcon icon="search" />
            </strong>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
