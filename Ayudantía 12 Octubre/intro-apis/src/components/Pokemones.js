import React, { useState } from 'react';

const Pokemones = () => {

    const [pokemones, setPokemones] = useState([]);
    const [limit, setLimit] = useState();



    const onClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit='+limit+"&offset=0")
        .then(response=>{
            //console.log("Response no jsonificada: ", response);
            return response.json()
        })
        .then((response)=>{
            console.log("RESPONSE JSONIFICADA:",response);
            setPokemones(response.results);
        })
    }



    return (
        <div>
            <button onClick={onClick}>FETCH POKEMONES</button>
            <input onChange={(e)=>setLimit(e.target.value)}></input>

            <ul>
                {pokemones.map((pokemon,index)=>{
                    return (<li key={index} > {pokemon.name} </li>)
                })}
            </ul>
            
        </div>
    );
}

export default Pokemones;
