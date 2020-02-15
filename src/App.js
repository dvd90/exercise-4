import React from "react";
import List from "./components/List";
import Form from "./components/Form";

import "./App.css";

const App = () => {
  return (
    <div id="app">
      <h1 className="app-title">Project title</h1>
      <div className="background">
        <List />
        <Form />
      </div>
    </div>
  );
};

export default App;
