import React, { useEffect, useState } from 'react';
import {useParams,useNavigate,Link} from "react-router-dom"
import { simpleGet } from '../services/simpleGet';

const Detail = () => {

    const {id} = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState();

    useEffect(() => {
       getProduct()
    }, []);

    const getProduct = async() => {
        const response = await simpleGet("http://localhost:8000/api/products/"+id)
        setProduct(response.data.product);
    }

    return (
        <div>
            <h3>Detalle de Producto id: {id} </h3>
            <h4>Nombre del producto {product?.nombre} </h4>
            <h4>Precio: $ {product?.precio} </h4>
            <Link to={"/product/edit/"+id}>EDITAR PRODUCTO</Link>
            <button onClick={()=>navigate("/")} >VOLVER</button>
            
        </div>
    );
}

export default Detail;
