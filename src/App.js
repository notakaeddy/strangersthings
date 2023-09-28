import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CreateAccount,
  LoginAccount,
  Profile,
  PostList,
  Navbar,
  PostForm,
  HomePage,
} from "./Components";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/login" element={<LoginAccount />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/postform" element={<PostForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
