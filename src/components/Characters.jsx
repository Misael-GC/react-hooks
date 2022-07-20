import React, {useState, useEffect, useReducer, useMemo}  from 'react'
import './Characters.css';
   
const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            };
            default:
                return state;
    }
}

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState(''); 

    useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character`)
        .then(response => response.json())
        .then(data => setCharacters(data.results)); 
    }, []);

    const handleClick = favorite => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }

    // const filteredUsers = characters.filter((user)=> {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    const filteredUsers = useMemo (() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    )

  return (
    <div className='Characters'>

        {favorites.favorites.map(favorite => (
            <li key={favorite.id}>
                {favorite.name}
            </li>
        ))}

            <div className='Search'>
                <input type='text' value={search} onChange={handleSearch}/>
            </div>

        {filteredUsers.map(character => (
            <div className='item' key={character.id}>
            <div className='container-card'>
                <img className='character-img' src={character.image} alt='imagenes de rick y morty'/>
                <h2 className='character-name'>{character.name}</h2>
                <p className='character-text'>{character.status}</p>
                <p className='character-text'>{character.species}</p>
                <p className='character-text'>{character.origin.name}</p>
                <button type='button' onClick={() => handleClick(character)}>Add to favourites</button>
            </div>
            </div>
        ))}
    </div>
  )
}

export { Characters }; 