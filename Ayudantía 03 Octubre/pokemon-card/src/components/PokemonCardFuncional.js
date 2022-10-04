import React, { useState } from 'react';

const PokemonCardFuncional = (props) => {

    const [power, setPower] = useState(props.power);

    const {name,types} = props;

    const aumentarPoder = () => {
        const nuevopoder = power + 1;
        setPower(nuevopoder);
    }

    return (
        <div className='pokemon-card'>
            <h2>{name} </h2>
            <h3>{power} </h3>
            <ul>
                    {types.map((tipo)=><li> {tipo} </li>)}
                </ul>
                <button onClick={aumentarPoder} >AUMENTAR PODER</button>
        </div>
    );
}

export default PokemonCardFuncional;
