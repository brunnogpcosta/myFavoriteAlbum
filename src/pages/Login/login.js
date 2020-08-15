import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import '../Login/login.css'



class Login extends Component {

    render() {
        return (
            <div className='containerLogin'>

                <form className='formLogin'>
                    <h2>Login</h2>
                    <input type="email" id="username" name="username" placeholder='E-mail' required />
                    <br />

                    <input type="password" id="pwd" name="pwd" placeholder='Senha' required />
                    <br />

                    <p><Link to="/cadastro" className="linkStyle">Não Tenho Cadastro</Link></p>


                    <input type="submit" id='envi' value='Entrar' />
                </form>



            </div >






        )
    }
}

export default Login