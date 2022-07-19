import React, {useState, useEffect}  from 'react' //llamamos a nuestros hooks
import './Characters.css';

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character`) //el porque de cada punto está en el link que te deje arriba
        .then(response => response.json()) //el llamado es una respuesta que convertimnos en json para poder manipularlo
        .then(data => setCharacters(data.results)); //results es la información de los personajes esta en la API|
    }, []);

  return (//render de los personajes
    <div className='Characters'>
        {characters.map(character => (
            <div className='container-card'>
                <img className='character-img' src={character.image} alt='imagenes de rick y morty'/>
                <h2 className='character-name'>{character.name}</h2>
                <p className='character-text'>{character.status}</p>
                <p className='character-text'>{character.species}</p>
                <p className='character-text'>{character.origin.name}</p>
            </div>
        ))}
    </div>
  )
}

export { Characters }; 