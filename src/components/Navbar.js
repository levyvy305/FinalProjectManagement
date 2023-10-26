import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

const NavBar = () => {
  const [action, setAction] = useState("Change");
  return (
    <header>
      <h2 className="logo">
        <ion-icon name="folder"></ion-icon> Final Project Management
      </h2>
      {/* <Nav className="navbar-1">
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </Nav> */}

      <Nav className="navbar-2">
        <div className="login-register">
          <button
            className={action === "Login" ? "submit gray transform" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </button>
        </div>
        {/* <Dropdown>
          <Dropdown.Toggle className="btn-popup">
            <ion-icon name="person-circle-sharp"></ion-icon>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/login">
                Login <ion-icon name="log-in-outline"></ion-icon>
              </Link>
            </Dropdown.Item>
             <Dropdown.Item>
              <Link to="/infor">
                Profile <ion-icon name="alert-circle-outline"></ion-icon>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/">Logout</Link>
              <ion-icon name="log-out -outline"></ion-icon>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Nav>
    </header>
  );
};
export default NavBar;
