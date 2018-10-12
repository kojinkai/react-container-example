import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import EditorContainer from "./components/editor-container";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingTop: "20px" }}>
        <EditorContainer />
      </div>
    );
  }
}

export default App;
