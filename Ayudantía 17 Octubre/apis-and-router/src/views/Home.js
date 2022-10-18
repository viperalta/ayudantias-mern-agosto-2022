import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {

    const {parametro} = useParams();

    return (
        <div>
            Este es el Home.
            Parametro pasado en la ruta: {parametro}
        </div>
    );
}

export default Home;
