import React from "react";
import Sidebar from "../sidebar/sidebar";
import Singlepage from "./singlepage";
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      <Singlepage />
      <Sidebar />
    </div>
  );
};

export default Single;
