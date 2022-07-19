import React, { useState, useContext } from 'react'; //traemos al useContexto 
import { ThemeContext } from '../context/ThemeContext';//traemos a nuestro contexto
import './Header.css'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const color = useContext(ThemeContext);// ---------
    const handleClick = ()=>{
        setDarkMode(!darkMode); //va a cambiar su estado actual sea true o false
    }
    return(
        <div className='Header'>
            <h1 style={{color}}>ReactHooks</h1> {/*  le pasamos la variable que acabamos de crear*/}
            <button type="button" onClick={handleClick}>{!!darkMode ? 'Dark Mode' : 'Light Mode'}</button>
            <button type="button" onClick={() => setDarkMode(!darkMode)}>{!!darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
        </div>
    );
}


export { Header };

