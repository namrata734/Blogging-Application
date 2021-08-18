import React from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

import "./singlepage.css";

const Singlepage = () => {
  const location = useLocation();
  //console.log(location);
  const path = location.pathname.split("/")[2];
  //console.log(path);
  const [post, setpost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      console.log(res.data);
      setpost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div>
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img src={post.photo} alt="" className="singlePostImg" />
          )}

          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <a href={`/?user=${post.username}`}>{post.username}</a>
              </b>
            </span>
            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>
          <p className="singlePostDesc">{post.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
