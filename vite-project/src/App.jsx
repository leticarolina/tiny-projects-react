import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import user from "./user.json";
import "./user.css";
import UserCard from "./UserCard";

function App() {
  {
    JSON.stringify(user);
  }
  return <UserCard></UserCard>;
}

export default App;
