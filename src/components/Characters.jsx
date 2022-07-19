import React, {useState, useEffect}  from 'react' //llamamos a nuestros hooks

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
            <h2>{character.name}</h2>
        ))}
    </div>
  )
}

export { Characters }; 