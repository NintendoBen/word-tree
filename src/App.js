import React, { useState, useCallback, useEffect } from "react";
import { WordTree } from "./core/WordTree";
import "./App.css";

let wordTree = null;

const database = [
  "Apple",
  "Alligator",
  "Arkansas",
  "Andy",
  "Andrew",
  "Akamai",
  "Alison",
  "Alphaghetti",
  "Adrien",
  "Adele",
  "Ant",
];

// const database = ["aaa", "abc", "aad", "abd"];

function createWordTree(data) {
  wordTree = new WordTree();

  for (let i = 0; i < database.length; ++i) {
    wordTree.store(database[i]);
  }
}

createWordTree(database);

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(["a", "b"]);

  const inputOnChange = useCallback((event) => {
    setInput(event.target.value);
  });

  useEffect(() => {
    const list = wordTree.retrieve(input);

    setList(list);
  }, [input]);

  return (
    <div className="App">
      <input type="text" value={input} onChange={inputOnChange} />
      {list ? list.map((item) => <div key={item}>{item}</div>) : null}
    </div>
  );
}

export default App;
