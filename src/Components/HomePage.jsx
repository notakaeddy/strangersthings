import React from "react";
import PostList from "./PostList";

const HomePage = () => {
  return (
    <div className="Homepage">
      <h1>Welcome to Stranger's Things™️</h1>
      <h3>TO POST, CREATE ACCOUNT/LOG IN</h3>
      <hr />
      <br />
      <PostList/>
    </div>
  );
};

export default HomePage;
