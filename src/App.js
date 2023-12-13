import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const colors = ["white", "red", "blue"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeBackgroundColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  useEffect(() => {
    document.body.style.backgroundColor = colors[currentColorIndex];
  }, [currentColorIndex]);

  return (
    <div className="abc">
      <button onClick={changeBackgroundColor}>Click here!</button>
      <h1>{colors[currentColorIndex]}</h1>
    </div>
  );
}

export default App;
