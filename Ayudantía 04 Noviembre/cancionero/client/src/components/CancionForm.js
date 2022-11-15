import React from 'react';
import * as Yup from "yup";
import { Field, Formik, Form } from 'formik';


const CancionForm = (props) => {
    const { nombre, artista, compositor1, compositor2, compositor3, onSubmitProp, action } = props

    return (
        <div>
            <Formik
                initialValues={{
                    nombre: nombre,
                    artista: artista,
                    compositor1: compositor1,
                    compositor2: compositor2,
                    compositor3: compositor3,
                }}
                validationSchema={Yup.object().shape({
                    nombre: Yup.string()
                        /* .min(4,"El nombre es muy corto") */
                        .max(15, "El nombre es muy corto")
                        .required("Por favor ingrese el nombre de la cancion"),
                    artista: Yup.string()
                        .required("Por favor ingrese un artista"),
                    compositor1: Yup.string(),
                    compositor2: Yup.string(),
                    compositor3: Yup.string()

                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("info del formik", values);
                    onSubmitProp(values);
                }}
            >
                {({ errors, touched, handleSubmit }) => {
                    return (<div>
                        <h2>Cancion nueva</h2>
                        <Form>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label htmlFor="nombre">Cancion</label>
                                        <Field id="nombre" type="text" placeholder="cancion" name="nombre" className="form-control" />
                                        {errors.nombre && touched.nombre && <p>{errors.nombre}</p>}

                                        <label htmlFor="artista">artista</label>
                                        <Field id="artista" type="text" placeholder="artista" name="artista" className="form-control" />
                                        {errors.artista && touched.artista && <p>{errors.artista}</p>}
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="compositor1">Compositor 1</label>
                                        <Field id="compositor1" type="text" placeholder="compositor 1" name="compositor1" className="form-control" />
                                        {errors.compositor1 && touched.compositor1 && <p>{errors.compositor1}</p>}

                                        <label htmlFor="compositor2">Compositor 2</label>
                                        <Field id="compositor2" type="text" placeholder="compositor 2" name="compositor2" className="form-control" />
                                        {errors.compositor2 && touched.compositor2 && <p>{errors.compositor2}</p>}

                                        <label htmlFor="compositor3">Compositor 3</label>
                                        <Field id="compositor3" type="text" placeholder="compositor 3" name="compositor3" className="form-control" />
                                        {errors.compositor3 && touched.compositor3 && <p>{errors.compositor3}</p>}
                                    </div>
                                    
                                </div>
                            </div>


                            <button type="submit" disabled={Object.values(errors).length > 0 || Object.values(touched).length === 0} >{action}</button>
                        </Form>
                    </div>)
                }}

            </Formik>

        </div>
    );
}

export default CancionForm;