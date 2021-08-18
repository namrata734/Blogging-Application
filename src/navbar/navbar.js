import React, { useContext } from "react";
import "./navbar.css";
import { Context } from "../context/context";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <div className="navbar">
        <div className="left">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-pinterest-square"></i>
          <i className="fab fa-twitter-square"></i>
        </div>
        <div className="center">
          <a href="/">
            <div className="centernav">HOME</div>
          </a>
          <a href="/">
            <div className="centernav">ABOUT</div>
          </a>
          <a href="/">
            <div className="centernav">CONTACT</div>
          </a>
          <a href="/write">
            <div className="centernav">WRITE</div>
          </a>
          {user && (
            <li className="centernav" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </div>
        <div className="right">
          {user ? (
            <a href="/settings">
              <img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </a>
          ) : (
            <ul className="topList">
              <div>
                <a className="centernav" href="/login">
                  LOGIN
                </a>
              </div>
              <div>
                <a className="centernav" href="/register">
                  SIGNUP
                </a>
              </div>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
