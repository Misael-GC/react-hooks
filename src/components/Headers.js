import React from "react";
import { useTheme } from "../context/ThemeProvider";

const Headers = () => {
    const {theme, toggleTheme, themeName} = useTheme();
    return( 
        <header className="App-header" style={{ backgroundColor: theme.background, color: theme.textColor }}>
        <p>Current Theme is "{themeName}"</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
    )
}

export {Headers};