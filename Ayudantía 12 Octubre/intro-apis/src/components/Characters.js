import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    const onClick = () => {
        fetch("https://rickandmortyapi.com/api/character?page=1")
        .then(response=>response.json())
        .then(response=>{
            console.log(response);
            setCharacters(response.results);
        })
        .catch(error=>console.log(error))
    }

    /* useEffect(() => {
        if(characters.length>0){
            console.log("Se han traido los personajes: ",characters);
        }
        //getCharacters()
    }, [characters]); */

    /* const getCharacters = () => {
        fetch("https://rickandmortyapi.com/api/character?page=1")
        .then(response=>response.json())
        .then(response=>{
            console.log(response);
            setCharacters(response.results);
        })
        .catch(error=>console.log(error))
    } */


    return (
        <div>
            <button onClick={onClick}>FETCH CHARACTERS</button>

<ul>
            {characters.map((character,index)=>{
                return (<li key={index} > {character.name} </li>)
            })}
            </ul>

            <div className='character-container'>

            {characters.map((character,index)=>{
                return (<CharacterCard name={character.name} image={character.image} />)
            })}

            </div>
            
        </div>
    );
}

export default Characters;
