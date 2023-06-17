// import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo/black.png';
import './index.css';
import { useState } from 'react';
import "../App.css";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const [shown, setShown] = useState(false);
  return (
    <>
      {/* <Navbar fixed="top" className="top-navbar p-0" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img 
            src={logo} 
            width="180" height="60" className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link className="text-white" href="/user/profile">
                <AccountCircleTwoToneIcon fontSize='large'/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
          <nav>
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="Powder Japan Logo" width="180" height="80"/>
        </Link>
      </div>
      <ul className={`nav-links visibility-${shown}`}>
        <Link
          to="/"
          onClick={() => {
            setShown(false);
            document.querySelector("body").classList.remove(`fixed-true`);
          }}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/destinations"
          onClick={() => {
            setShown(false);
            document.querySelector("body").classList.remove(`fixed-true`);
          }}
        >
          <li>Destinations</li>
        </Link>
        {/* <Link to="/about">
          <li>About</li>
        </Link> */}
        {/* <Link to="/contact">
          <li>Contact</li>
        </Link> */}
        {/* {!user.authenticated ? ( */}
          <Link
            to="/user/profile"
            onClick={() => {
              setShown(false);
              document.querySelector("body").classList.remove(`fixed-true`);
            }}
          >
            <li>Profile</li>
          </Link>
      </ul>
      <div
        className="burger"
        onClick={() => {
          setShown((shown) => !shown);
          document.querySelector("body").classList.toggle(`fixed-true`);
        }}
      >
        <div className={`burger-line line-1 line-${shown}`}></div>
        <div className={`burger-line line-2 line-${shown}`}></div>
        <div className={`burger-line line-3 line-${shown}`}></div>
      </div>
    </nav>
    </>
  );
};

export default TopNavbar;
