import React, { useState } from 'react';
import './Header.css'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleClick = ()=>{
        setDarkMode(!darkMode); //va a cambiar su estado actual sea true o false
    }
    return(
        <div className='Header'>
            <h1>ReactHooks</h1>
            <button type="button" onClick={handleClick}>{!!darkMode ? 'Dark Mode' : 'Light Mode'}</button>
            <button type="button" onClick={() => setDarkMode(!darkMode)}>{!!darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
        </div>
    );
}


export { Header };