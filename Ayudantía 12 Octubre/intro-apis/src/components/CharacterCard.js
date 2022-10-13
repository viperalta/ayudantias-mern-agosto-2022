import React from 'react';

const CharacterCard = (props) => {

    const {name,image} = props;

    return (
        <div className='character-card'>
            <img src={image} ></img>
            <h3> {name} </h3>
            
        </div>
    );
}

export default CharacterCard;
