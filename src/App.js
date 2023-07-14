import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const itemEvent = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const addTodos = () => {
    const newTask = {
      taskName: input,
      isDone: false,
    };
    if (input === "") {
      alert("Please Enter Task");
    } else {
      setTodos([...todos, newTask]);
      setInput("");
    }
  };

  const deleteItem = (idx) => {
    const newArr = todos.filter((val, i) => i !== idx);
    setTodos([...newArr]);
  };

  const completed = (idx) => {
    const idxVal = todos.findIndex((ele, id) => id === idx);
    const tempArr = [...todos];

    tempArr[idxVal] = {
      ...tempArr[idxVal],
      isDone: !tempArr[idxVal].isDone,
    };

    setTodos(tempArr);
  };

  return (
    <>
      <div className="app">
        <div className="app_body">
          <div className="header">
            <input
              type="text"
              value={input}
              placeholder="Add Your task"
              className="input_box"
              onChange={itemEvent}
            />
            <button className="btn" onClick={addTodos}>
              Add
            </button>
          </div>
          <div className="items">
            <ul>
              <div className="item">
                {todos.map((itemval, i) => {
                  return (
                    <>
                      <li key={i}>
                        <span
                          className={itemval.isDone ? "cross" : "not-cross"}
                          onClick={() => completed(i)}
                        >
                          {itemval.taskName}
                        </span>
                        <button
                          className="del_btn"
                          onClick={() => deleteItem(i)}
                        >
                          &#10006;
                        </button>
                      </li>
                    </>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
