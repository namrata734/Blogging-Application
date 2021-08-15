import React from "react";
import Header from "../header/header";
import Post from "../header/post/post";
import Sidebar from "../sidebar/sidebar";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="colums">
        <Post />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
