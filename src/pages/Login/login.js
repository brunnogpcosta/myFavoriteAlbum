import * as yup from 'yup'

import React from 'react';
import { Link } from 'react-router-dom'
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'
import PropTypes from 'prop-types'

import '../Login/login.css'

const validations = yup.object().shape({
    user: yup.string().email().required(),
    password: yup.string().min(8).required()
})

const Login = ({ handleSubmit, initialValues }) => (
    <div className='containerLogin'>

        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
            <FormikForm className='formLogin'>
                <h2>Login</h2>
                <div className="Form-Group">
                    <Field className="Form-Field" name="user" id="username" placeholder='E-mail' />
                    <ErrorMessage className="Form-Error" component="span" name="user" />
                </div>
                <br />
                <div className="Form-Group">
                    <Field className="Form-Field" name="password" placeholder='Senha'/>
                    <ErrorMessage className="Form-Error" component="span" name="password"/>
                </div>

                <br />
                <p><Link to="/cadastro" className="linkStyle">Não Tenho Cadastro</Link></p>


                <input type="submit" id='envi' value='Entrar' />
            </FormikForm>
        </Formik>
    </div >
)


Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}







export default Login