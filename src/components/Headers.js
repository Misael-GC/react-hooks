import React from "react";
import { useTheme } from "../context/ThemeProvider";

const Headers = () => {
    const {theme, toggleTheme, themeName} = useTheme();
    return( 
        <header className="App-header" style={{ backgroundColor: theme.background, color: theme.textColor }}>
        <p>Hook Context(reto) "{themeName}"</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
    )
}

export {Headers};