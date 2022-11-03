import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const ReviewForm = (props) => {
  const { rating, content, onSubmitProp } = props;

  return (
    <div>
      <Formik
        initialValues={{
          rating: rating,
          content: content,
        }}

        validationSchema={Yup.object().shape({
            rating:Yup.number(),
            content:Yup.string()
            .min(10, "El contenido de la reseña es muy corto")
            .required("Por favor ingresa el contenido de la reseña")
        })}

        onSubmit={(values,{setSubmitting})=>{
            console.log("INFO DEL FORMIK",values);
            onSubmitProp(values);
        }}


      >

{({errors,touched,handleSubmit})=>{
            return(
                <div>
                    <h2>FORMULARIO DE PRODUCTO</h2>
                    <Form>
                        <label htmlFor="rating" >Rating de la reseña</label>
                        <Field id="rating" type="number" as="select" className="form-select" name="rating">
                          <option value={1}>1 Estrella</option>
                          <option value={2}>2 Estrellas</option>
                          <option value={3}>3 Estrellas</option>
                          <option value={4}>4 Estrellas</option>
                          <option value={5}>5 Estrellas</option>
                        </Field>
                        {errors.rating && touched.rating && <p> {errors.rating} </p>}

                        <label htmlFor="content" >content</label>
                        <Field id="content" type="text" as="textarea" placeholder="Ingresa el contenido de la reseña" name="content" className="form-control" />
                        {errors.content && touched.content && <p> {errors.content} </p>}

                        <button type="submit" disabled={Object.values(errors).length>0 || Object.values(touched).length===0} >ENVIAR</button>

                    </Form>
                </div>
            )
        }}


      </Formik>
    </div>
  );
};

export default ReviewForm;
