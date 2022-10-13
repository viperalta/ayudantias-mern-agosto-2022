import React, { useEffect, useState } from 'react';
import { getCharacters } from '../actions/getCharacters';
import CharacterCard from './CharacterCard';

const CharactersAsync = () => {

    const [characters, setCharacters] = useState([]);

    const onClick = async() => {
        const response = await getCharacters("https://rickandmortyapi.com/api/character?page=1");
        console.log(response);
        setCharacters(response.results)
    }

    return (
        <div>
            <button onClick={onClick}>FETCH CHARACTERS</button>

            <div className='character-container'>

            {characters.map((character,index)=>{
                return (<CharacterCard key={index} name={character.name} image={character.image} />)
            })}

            </div>
            
        </div>
    );
}

export default CharactersAsync;
