import React , {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';
import { useNavigate } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import { simplePost } from '../services/simplePost';

const NewReview = () => {

    const {idProduct} = useParams();
    const [product, setProduct] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getProduct()
     }, []);
 
     const getProduct = async() => {
         const response = await simpleGet("http://localhost:8000/api/products/"+idProduct)
         setProduct(response.data.product);
     }

     const agregarReview = async(values)=>{
        console.log("VALUES DE FORMULARIO DENUEVA RESEÑA",values);
        const valuesFinal = {...values,idProduct:idProduct};
        const response = await simplePost("http://localhost:8000/api/reviews/new",valuesFinal);
        navigate("/")
     }

    return (
        <div>
            <h3>Agregando resña para producto de id: {idProduct} </h3>
            <h4>Nombre Product: {product?.nombre} </h4>
            <h4>Precio Product: $ {product?.precio} </h4>
            <button onClick={()=>navigate("/")} >VOLVER</button>
            <ReviewForm rating={1} content="" onSubmitProp={agregarReview}></ReviewForm>
        </div>
    );
}

export default NewReview;
