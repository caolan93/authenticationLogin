import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.scss";

//Components
import Register from "./components/register";

function App() {
  return (
    <main className="App">
      <Register />
    </main>
  );
}

export default App;
