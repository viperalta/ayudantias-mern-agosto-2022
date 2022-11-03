import React, { useEffect, useState } from 'react';
import {useParams,useNavigate,Link} from "react-router-dom"
import { simpleGet } from '../services/simpleGet';

const Detail = () => {

    const {id} = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState();
    const [reviews, setReviews] = useState();

    useEffect(() => {
       getProduct()
    }, []);

    const getProduct = async() => {
        const response = await simpleGet("http://localhost:8000/api/products/"+id)
        setProduct(response.data.product);
    }

    useEffect(() => {
       if(product){
         getReviews()
       }
    }, [product]);

    const getReviews = async() => {
        const response = await simpleGet("http://localhost:8000/api/reviews/"+id)
        console.log(response);
        if(response.data.message===""){
            setReviews(response.data.reviews)
        }
    }

    useEffect(() => {
       console.log("LAS REVIEWS",reviews);
    }, [reviews]);

    return (
        <div>
            <h3>Detalle de Producto id: {id} </h3>
            <h4>Nombre del producto {product?.nombre} </h4>
            <h4>Precio: $ {product?.precio} </h4>
            <Link to={"/product/edit/"+id}>EDITAR PRODUCTO</Link>
            <button onClick={()=>navigate("/")} >VOLVER</button>
            <h2>LISTADO DE RESEÑAS DEL PRODUCTO</h2>
            {reviews?.map((review,index)=>{
                return(<>
                <div className='review'>
                    <h4> Rating de la review {review.rating}</h4>
                    <h4>Contenido: {review.content} </h4>
                    <h5>Usuario creador: {review.creatorName} </h5>
                </div>
                <hr></hr>
                </>)
            })}
            
        </div>
    );
}

export default Detail;
