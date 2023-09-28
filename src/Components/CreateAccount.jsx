import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountCreation as creatingAccount } from "../API";

const CreateAccount = ({ setIsLoggedIn }) =>
{
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsername = (x) =>
  {
    setUsername(x.target.value);
  };

  const handlePassword = (x) =>
  {
    setPassword(x.target.value);
  };

  const infoSubmit = async (x) =>
  {
    x.preventDefault();
    await creatingAccount(username, password);
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/posts");
    } else {
      console.log("Invalid Login, Try Again");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="Register">
      <h2>Create Account</h2>
      <form onSubmit={infoSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePassword}
        ></input>
        <button styles={{ width: "90px", height: "50px" }}>Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
