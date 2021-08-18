import React from "react";
import Header from "../header/header";
import Post from "../header/post/post";
import Sidebar from "../sidebar/sidebar";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const { search } = useLocation();

  React.useEffect(() => {
    const fetchpost = async () => {
      const response = await axios.get("/posts" + search);
      setPosts(response.data);
      //console.log(response.data);
    };
    fetchpost();
  }, []);

  return (
    <div>
      <Header />
      <div className="colums">
        <Post posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
