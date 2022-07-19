import React from "react";
import { Header } from "./components/Header";
import { Characters } from "./components/Characters";
import "./App.css";
import {Headers} from './components/Headers'
import ThemeProvider from "./context/ThemeProvider";
import {useState} from "react";

const themeStyles = {
  dark: {
    background: '#282c34',
    textColor: 'white'
  },
  light: {
    background: 'white',
    textColor: '#282c34'
  }
}


function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => theme === 'dark'? setTheme('light') : setTheme('dark'); 
  return (
    <ThemeProvider>
    <div className="App" style={{backgroundColor: themeStyles[theme].background, color: themeStyles[theme].textColor}}>
    <Headers/>
        <Header />
        <button onClick={toggleTheme}>
        Modo Pantalla
        </button>
        <p>Current Themes is "{theme}"</p>
        <Characters />
    </div>
    </ThemeProvider>
      
  );
}

export default App;
