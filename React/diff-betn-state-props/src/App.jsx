import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./Greeting";

function App() {
  // console.log("Parent Component")

  const [name, setName] = useState("Rahul");
  const [showgreeting, setShowGreeting] = useState(true);
  console.log("showGreeting", showgreeting);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Props v/s States</h1>

      <button onClick={() => setShowGreeting(!showgreeting)}>
        {showgreeting === true ? "Hide" : "Show"}
      </button>

      {/* <Greeting name={name} /> */}

      {/* {
        showgreeting === true ? "Sai" : "pranab"
      } */}

      {showgreeting && (
        <Greeting name={name}>
          <p>
            This is extra elemnt passed as <strong>children</strong>
          </p>
          We can pass more elements text components etc...
        </Greeting>
      )}

      <button
        style={{ padding: "20px", marginTop: "20px" }}
        onClick={() => {
          setName((prev) => prev + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
