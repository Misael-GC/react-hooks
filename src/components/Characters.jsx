import React, {useState, useReducer, useMemo, useRef, useCallback}  from 'react';
import './Characters.css';
import { Search } from './Search.jsx';
import { useCharacters } from '../hooks/useCharacters';


const initialState = {
    favorites: []
}

    const API = 'https://rickandmortyapi.com/api/character/ '

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
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    const characters = useCharacters(API);

    const handleClick = favorite => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    // const handleSearch = () =>{
    //     setSearch(searchInput.current.value);
    // }

    const handleSearch = useCallback (() => {
        setSearch(searchInput.current.value);
    }, [])
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

            <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>

        <div className='Naruto'>
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
    </div>
  )
}

export { Characters }; 