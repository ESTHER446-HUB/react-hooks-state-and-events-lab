import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shop</h2>
        <button onClick={handleClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ul className="Items">
        <Item name="Milk" category="Dairy" />
        <Item name="Eggs" category="Protein" />
      </ul>
    </div>
  );
}

export default App;
