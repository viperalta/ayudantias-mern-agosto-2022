import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import { simpleGet } from "../services/simpleGet";
import { simplePost } from "../services/simplePost";
import { Link } from "react-router-dom";
import { simpleDelete } from "../services/simpleDelete";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [productos, setProductos] = useState();
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const response = await simpleGet("http://localhost:8000/api/products");
    console.log(response);
    setProductos(response.data.productos);
  };

  const crearProducto = async (values) => {
    console.log("VALORES DESDE FORMIK, EN VISTA MAIN", values);
    const response = await simplePost(
      "http://localhost:8000/api/products/new",
      values
    );
    if (response.data.message === "") {
      setProductos([...productos, response.data.product]);
    } else {
      console.log("ERRORES", response.data);
      const errorResponse = response.data.errors;
      console.log("Object keys", Object.keys(errorResponse));
      const errorArr = [];
      for (const llave of Object.keys(errorResponse)) {
        console.log(errorResponse[llave]);
        errorArr.push(errorResponse[llave].message);
      }
      setErrors(errorArr);
    }
  };

  const eliminarProducto = async (id) => {
    const response = await simpleDelete(
      "http://localhost:8000/api/products/delete/" + id
    );
    setProductos(productos.filter((producto) => producto._id !== id));
    //getProductos()
  };

  return (
    <div>
      {errors.map((error, index) => (
        <p key={index}>ERROR: {error} </p>
      ))}

      <ProductForm
        nombre=""
        precio=""
        onSubmitProp={crearProducto}
      ></ProductForm>

      <h3>TODOS LOS PRODUCTOS</h3>
      <ul>
        {productos?.map((producto, index) => (
          <li key={index}>
            <Link to={"/product/" + producto._id}>
              {producto.nombre} - $ {producto.precio}
            </Link>
            <button onClick={() => eliminarProducto(producto._id)}>
              ELIMINAR
            </button>
            <button onClick={()=>navigate("/product/add-review/"+producto._id)}>AÑADIR RESEÑA</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
