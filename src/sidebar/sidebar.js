import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarTitle">ABOUT ME</div>
      <div>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
      </div>
      <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet
        ex esse.Sunt eu ut nostrud id quis proident.
      </p>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <div>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <a href="/posts?cat=Life">Life</a>
            </li>
            <li className="sidebarListItem">
              <a href="/posts?cat=Music">Music</a>
            </li>
            <li className="sidebarListItem">
              <a href="/posts?cat=Sport">Sports</a>
            </li>
            <li className="sidebarListItem">
              <a href="/posts?cat=Style">Style</a>
            </li>
            <li className="sidebarListItem">
              <a href="/posts?cat=Tech">Tech</a>
            </li>
            <li className="sidebarListItem">
              <a href="/posts?cat=Cinema">Cinema</a>
            </li>
          </ul>
        </div>
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
