import React from 'react';
import { Formik, Field, Form} from "formik";
import * as Yup from "yup";

const RegisterForm = (props) => {

    const {firstName,lastName,email,password,confirmPassword,onSubmitProp}=props;
    
    return (
        <div >
          <Formik
          initialValues={{
          firstName : firstName,
          lastName:lastName,
          email:email,
          password:password,
          confirmPassword:confirmPassword,
        }}
        validationSchema={Yup.object().shape({
            firstName: Yup.string()
            .min(3, "Tu nombre es muy corto")
            .required ("Por favor ingresa tu nombre"),
            
            lastName: Yup.string()
            .min (3, "El apellido es muy corto")
            .required("Por favor ingrese el apellido correctamente"),
            
            email: Yup.string()
            .email("Correo no valido")
            .min(3, "Este correo electrónico es incorrecto")
            .required("Por favor, ingresa un correo electrónico válido"),
            
            password: Yup.string()
            .equals([Yup.ref('confirmPassword'), null], "las contraseñas no son iguales")
            .min(8, "La clave debe contener más de 8 caractes")
            .required("Por favor ingrese una contraseña"),

            confirmPassword: Yup.string()
            .equals([Yup.ref('password'), null], "las contraseñas no son iguales")
            .min(8, "La clave debe contener más de 8 caractes")
            .required("Por favor ingrese la confirmación de la contraseña"),
        })}

        onSubmit={(values, {setSubmitting}) =>{
            onSubmitProp(values);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                //isSubmitting,
                //validating,
                valid,
            }) =>{
        return (
            <div>
                <h1>REGISTRO</h1>
                <Form className= "contact" method= "post" onSubmit={handleSubmit}>
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">Nombre</label>
                    <Field id='firstName'type="text" className="form-control" placeholder="Nombre" name='firstName'/>
                    {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
        
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">Apellido</label>
                    <Field  id='lastName' type="text" placeholder="Apellido" className="form-control" name='lastName'/>
                    {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}

                    <label htmlFor="email" className="col-form-label">Correo Electrónico</label>
                    <Field id='email' type="text" placeholder="Email" className="form-control" name='email'/>
                    {errors.email && touched.email && <p>{errors.email}</p>}

                    <label htmlFor="password" className="col-sm-2 col-form-label">Contraseña</label>
                    <Field  id='password' type="password" placeholder="Contraseña" className="form-control" name='password'/>
                    {errors.password && touched.password && <p>{errors.password}</p>}

                    <label htmlFor="confirmPassword" className="col-form-label">Confirmar Contraseña</label>
                    <Field  id='confirmPassword' type="password" placeholder="Confirmar Contraseña" className="form-control" name='confirmPassword'/>
                    {errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}
                    <br></br>
                    <button type="submit" disabled={Object.values(errors).length > 0}>Registrarse</button>
                </Form>
                </div>
        );
        }}
        </Formik>
        </div>
      );
    }
export default RegisterForm