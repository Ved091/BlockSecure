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
      <nav className="nav">
        <div className="container is--nav">
          <div className="nav_menu">
            <div className="nav__menu-dp-wrap">
              <div className="nav__menu-dp-link">
                <a
                  href="/about"
                  className="nav__menu-link-padding w-inline-block"
                >
                  <div className="nav__menu-link-txt">Features</div>
                </a>
              </div>
              <div className="nav__menu-dp-link">
                <a
                  href="/feedback"
                  className="nav__menu-link-padding w-inline-block"
                >
                  <div className="nav__menu-link-txt">Features</div>
                </a>
              </div>
              <div className="nav__menu-dp-link">
                <a
                  href="/contact"
                  className="nav__menu-link-padding w-inline-block"
                >
                  <div className="nav__menu-link-txt">Features</div>
                </a>
              </div>
              <div className="nav__menu-dp-link">
                <a
                  href="/footer"
                  className="nav__menu-link-padding w-inline-block"
                >
                  <div className="nav__menu-link-txt">Features</div>
                </a>
              </div>
            </div>
          </div>
          <ConnectWallet />
          <div className="nav__btns-wrp">
            <div
              className="btn_navbar is--navbar-login w-inline-block"
              onClick={login}
            >
              <div>Login</div>
            </div>
            <div
              className="btn_navbar is--main-cta is--nav w-inline-block"
              onClick={signup}
            >
              <div>Sign Up</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
