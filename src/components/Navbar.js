import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  
  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid" style={{position: "relative"}}>
          <Link id="pg-title" className="navbar-brand" to="/">
            The WireLess
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-itm" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link id="abt" className="nav-itm" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-itm" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>

            <ul
              id="categ-links"
              className="navbar-nav mb-lg-0"
              style={{ marginLeft: "50px" }}
            >
              <li className="nav-item">
                <a className="nav-itm" aria-current="page" href="/business">
                  Business
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-itm" aria-current="page" href="/science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-itm" aria-current="page" href="/health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-itm" aria-current="page" href="/sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-itm" aria-current="page" href="/technology">
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-itm"
                  aria-current="page"
                  href="/entertainment"
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
          
          

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
