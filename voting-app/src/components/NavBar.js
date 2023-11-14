import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  const navigate = useNavigate();

  const login = () => {
    let path = "/login";
    navigate(path);
  };

  const signup = () => {
    let path = "/register";
    navigate(path);
  };

  return (
    <div>
      <nav className="nav" style={{ background: "linear-gradient(to right, #4481eb, #04befe)" }}>
        <div className="container">
          <h1 className="nav__heading">
            <span className="blocksecure">BlockSecure</span>
          </h1>
          <div className="nav_menu">
            <div className="nav__menu-dp-wrap">
              <a href="/" className="nav__menu-link">
                Home
              </a>
              <a href="/about" className="nav__menu-link">
                About Us
              </a>
              <a href="/why-voting" className="nav__menu-link">
                Why Voting
              </a>
            </div>
          </div>
          <ConnectWallet />
          <div className="nav__btns-wrp">
            <div className="btn-container">
              <div className="login-signup" onClick={login}>
                <div>Login</div>
              </div>
              <div className="login-signup" onClick={signup}>
                <div>Sign Up</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
