import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <svg
        aria-hidden="true"
        data-prefix="far"
        data-icon="graduation-cap"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        class="svg-inline--fa fa-graduation-cap fa-w-20 fa-3x svgClass"
      >
        <path
          fill="currentColor"
          d="M606.72 147.91l-258-79.57c-18.81-5.78-38.62-5.78-57.44 0l-258 79.57C13.38 154.05 0 171.77 0 192.02s13.38 37.97 33.28 44.11l22.64 6.98c-2.46 5.19-4.4 10.62-5.7 16.31C39.53 264.6 32 275.33 32 288.01c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.95 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.66c8.17-5.8 13.86-14.87 13.86-25.65 0-10.6-5.49-19.54-13.43-25.36 1.13-3.55 2.96-6.67 4.85-9.83l54.87 16.92L128 384c0 35.34 85.96 64 192 64s192-28.65 192-64l-14.28-114.26 109-33.62c19.91-6.14 33.28-23.86 33.28-44.11s-13.38-37.96-33.28-44.1zM462.44 374.47c-59.7 34.2-225.9 33.78-284.87 0l11.3-90.36 102.42 31.59c11.15 3.43 32.24 7.77 57.44 0l102.42-31.59 11.29 90.36zM334.59 269.82c-9.44 2.91-19.75 2.91-29.19 0L154.62 223.3l168.31-31.56c8.69-1.62 14.41-9.98 12.78-18.67-1.62-8.72-10.09-14.36-18.66-12.76l-203.78 38.2c-6.64 1.24-12.8 3.54-18.71 6.27L53.19 192l252.22-77.79c9.44-2.91 19.75-2.91 29.19 0l252.22 77.82-252.23 77.79z"
          class=""
        />
      </svg>
      <a className="navbar-brand brand ml-2" href="#">
        Payil
      </a>
      <div className="menu collapse navbar-collapse ml-5">
        <ul className="navbar-nav mr-auto">
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
        <form className="form-inline mt-2 mt-md-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            // placeholder=". . ."
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <strong>
              <FontAwesomeIcon icon="search" />
            </strong>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
