import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import { simpleGet } from '../services/simpleGet';
import { simplePost } from '../services/simplePost';
import { Link } from 'react-router-dom';
import { simpleDelete } from '../services/simpleDelete';

const Main = () => {

    const [productos, setProductos] = useState();

    useEffect(() => {
        getProductos()
    }, []);

    const getProductos = async() => {
        const response = await simpleGet("http://localhost:8000/api/products");
        console.log(response);
        setProductos(response.data.productos)
    }

    const crearProducto = async(values) => {
        console.log("VALORES DESDE FORMIK, EN VISTA MAIN",values);
        const response = await simplePost("http://localhost:8000/api/products/new",values);
        setProductos([...productos,response.data.product]);
    }

    const eliminarProducto = async(id) => {
        const response = await simpleDelete("http://localhost:8000/api/products/delete/"+id)
        setProductos(productos.filter(producto=>producto._id!==id));
        //getProductos()
    }


    return (
        <div>
            <ProductForm nombre="" precio="" onSubmitProp={crearProducto} ></ProductForm>

            <h3>TODOS LOS PRODUCTOS</h3>
            <ul>
            {productos?.map((producto,index)=><li key={index}><Link to={"/product/"+producto._id} > {producto.nombre} - $ {producto.precio}  </Link><button onClick={()=>eliminarProducto(producto._id)} >ELIMINAR</button> </li>)}
            </ul>
            
        </div>
    );
}

export default Main;
