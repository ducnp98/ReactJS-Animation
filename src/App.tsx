import React from "react";
import "./App.css";
import { Avatar } from "@material-tailwind/react";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
    </div>
  );
};

export default App;
