import React, { useState } from "react";
import Outline from "./Outline";
import initialData from "./test";
import "./App.css";

function App() {
  const [data, setData] = useState(initialData);

  return <Outline root={data} onChange={setData} />;
}

export default App;
