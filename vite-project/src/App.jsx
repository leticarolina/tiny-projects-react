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
  return (
    <UserCard
      name={user.name}
      age={user.age}
      phoneNumber={user.phoneNumber}
      address={user.address}
    >
      {" "}
    </UserCard>
  );
}

//name= age= these are exactly the props the fucntion/componenet UserCard has
// {user.name} {user.age} referring to the user.json and getting the object values by it's key

export default App;
