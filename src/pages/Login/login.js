import * as yup from 'yup'

import React from 'react';
import { Link } from 'react-router-dom'
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'
import PropTypes from 'prop-types'

import '../Login/login.css'

const validations = yup.object().shape({
    email: yup.string().min(10, 'E-mail Inválido'),
    password: yup.string().min(6, 'Mínimo de 6 dígitos'),
});

const Login = ({ handleSubmit, initialValues }) => (
    <div className='containerLogin'>

        <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => {
            console.log(values);
        }} validationSchema={validations}>
            <FormikForm className='formLogin'>
                <h2>Login</h2>
                
                    <Field className="Form-Field" name="email" id="username" placeholder='E-mail' />
                    <ErrorMessage className="Form-Error" component="span" name="email" />
               
                <br />
               
                    <Field className="Form-Field" name="password" placeholder='Senha' required/>
                    <ErrorMessage className="Form-Error" component="span" name="password" />
              

                <br />
                <p><Link to="/cadastro" className="linkStyle">Não Tenho Cadastro</Link></p>


                <input type="submit" id='envi' value='Entrar' />
            </FormikForm>
        </Formik>
    </div >
)



export default Login