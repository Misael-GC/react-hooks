import React from "react";
import { Header } from "./components/Header";
import { Characters } from "./components/Characters";
import "./App.css";
import ThemeProvider from "./context/ThemeProvider";
import { Headers } from "./components/Headers";

function App() {
  return (
      <ThemeProvider>
    <div className="App">
        <Headers/>
        <Header />
        <Characters />
    </div>
      </ThemeProvider>
  );
}

export default App;
