import React, { useEffect, useState } from 'react';
import { simpleGet } from '../actions/simpleGet';

const Paginacion = () => {

    const [personajes,setPersonajes] = useState([]);
    const [paginas,setPaginas] = useState([]);
    const [paginaSelected,setPaginaSelected] = useState([]);

    useEffect(() => {
        getPaginas();
        setPaginaSelected(1);
    }, []);

    useEffect(() => {
       getPersonajes(paginaSelected);
    }, [paginaSelected]);

    const getPersonajes = async (pagina) => {
        const response = await simpleGet("https://rickandmortyapi.com/api/character?page="+pagina)
        console.log("Respuesta de la pagina: "+pagina,response.data);
        setPersonajes(response.data.results);
    }

    const getPaginas = async () => {
        const response = await simpleGet("https://rickandmortyapi.com/api/character")
        console.log("info",response.data.info);
        const pagesArray = [];
        for(let i=1;i<=response.data.info.pages;i++){
            pagesArray.push(i);
        }
        setPaginas(pagesArray);
    }

    const changePage = (pagina) => {
        setPaginaSelected(pagina);
    }

    return (
        <div>
            <h2>Paginacion</h2>

            <div className='listado'>
                <ul>
                    {personajes.map((personaje)=><li> {personaje.name} </li>)}
                </ul>
                
            </div>
            <div className='pagination'>
                {paginas.map((page,i)=><button className={`page ${paginaSelected===i+1?"active":""}`} onClick={()=>changePage(page)} > {page} </button>)}
            </div>

            
        </div>
    );
}

export default Paginacion;
