import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");

  function textHandle(event) {
    const textBox = event.target.value;
    setTask(textBox);
    console.log(task);
  }

  function buttonHandle() {}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form action={buttonHandle}>
        <div className="form">
          <input type="text" onChange={textHandle} />
          <button type="submit">
            <span>Add</span>
          </button>
        </div>
      </form>
      <div>
        <ul>
          <li>A Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
