import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function textHandle(event) {
    const textBox = event.target.value;
    setInputText(textBox);
    console.log(inputText);
  }

  function buttonHandle() {
    setItems((abc) => {
      //input variable in setItem is mean prevValue
      return [...abc, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={textHandle} value={inputText} />
        <button type="submit" onClick={buttonHandle}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((todoItem) => {
            return <li key={todoItem.id}>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
