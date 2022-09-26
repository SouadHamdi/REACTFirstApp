import React from "react";
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-6 ">
        <a className="navbar-brand" href="#">
          Website React
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Policy
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="p-5 text-center bg-light">
    <h1 className="mb-3">Welcome everyone</h1>
    <h4 className="mb-3">Our website provides a large list of products</h4>
    <Button variant="warning">Select a product in one click</Button>  </div>
    </>
  );
};

export default Header;
