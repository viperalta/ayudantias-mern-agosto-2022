import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';

const Swapi = () => {

    const [selectedResource, setSelectedResource] = useState();
    const [selectedId, setSelectedId] = useState("");
    const [selectedItems, setSelectedItems] = useState();
    const [selectedItem, setSelectedItem] = useState();

    const resourceChange = (e) => {
        setSelectedResource(e.target.value)
    }

    useEffect(() => {
        if(selectedResource){
            getSelectedItems(selectedResource);
        }
    }, [selectedResource]);

    const getSelectedItems = async (resource) => {
        const response = await simpleGet("https://swapi.dev/api/"+resource)
        console.log("items",response.data);
        //const arregloFinal = response.data.results.map((item,index)=>({...item,id:index}))
        setSelectedItems(response.data.results);
    }

    useEffect(() => {
        console.log("items 2",selectedItems)
    }, [selectedItems]);

    const showSelectedItems = () => {
        if(selectedItems){
            if(selectedResource==="people"){
                return selectedItems.map((item,index)=><li key={index} ><Link to={"/"+index+1} >{index+1} - {item.name} - {item.url}</Link></li>)
            }else{
                return selectedItems.map((item,index)=><p key={index} > {index+1} - {selectedResource==="films"?item.title:item.name} - {item.url} </p>)
            }
             }
    }

    const showSelectedItem = () => {
        if(selectedItem){
            return Object.keys(selectedItem).map((property,index)=>{
                return (<li> {property} : {selectedItem[property]} </li>)
            })
        }
    }

    function onSubmit (e){
        e.preventDefault()
        setSelectedItem(selectedItems[selectedId-1])
    }


    return (
        <div>
            <form onSubmit = {onSubmit}>
                <select name="resource-select" onChange={resourceChange} >
                    <option value="" disabled selected>Elegir Recurso</option>
                    <option value="people" >People</option>
                    <option value="films" >Films</option>
                    <option value="vehicles" >Vehicles</option>
                    <option value="species" >Species</option>
                    <option value="planets" >Planets</option>
                </select>
                <label> Elegir id</label>
                <input name="selected-id" type="text" onChange= {(e)=>setSelectedId(e.target.value)}></input>
                <input type="submit" value="Buscar item"></input>
            </form>
            <h3>Listado de items del recurso seleccionado</h3>
            <div className='listado'>
                {showSelectedItems()}
            </div>
            <div className='elemento'>
                {showSelectedItem()}
            </div>
            
        </div>
    );
}

export default Swapi;
