import { useState } from "react";
import "./App.css";

function App() {
  // Initial values
  const [color1, setColor1] = useState("#b2fefa");
  const [color2, setColor2] = useState("#0ed2f7");

  // Compute background style dynamically
  const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

  // Function: Random color generator
  const randomGenerator = () => {
    const randomColor = () =>
      `rgb(${Math.floor(Math.random() * 256)}, 
           ${Math.floor(Math.random() * 256)}, 
           ${Math.floor(Math.random() * 256)})`;

    setColor1(randomColor());
    setColor2(randomColor());
  };

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        background: gradient,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Background Generator</h1>

      {/* Color pickers */}
      <input
        type="color"
        value={color1}
        onChange={(e) => setColor1(e.target.value)}
      />
      <input
        type="color"
        value={color2}
        onChange={(e) => setColor2(e.target.value)}
      />

      {/* Random Button */}
      <button className="random" onClick={randomGenerator}>
        Random BG
      </button>

      {/* Current CSS */}
      <h2>Current CSS Background</h2>
      <h3>{gradient};</h3>

      <footer>
        <p>
          © 2021{" "}
          <a href="https://azizshahdawala-aboutme.herokuapp.com/">
            Aziz Shahdawala
          </a>{" "}
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
