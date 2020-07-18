import React, { Component } from 'react';

import '../Login/login.css'



class Login extends Component {

    render() {
        return (
            <div className='container'>

                <form>
                    <h2>Login</h2>
                    <input type="text" id="username" name="username" placeholder='E-mail' required />
                    <br />

                    <input type="password" id="pwd" name="pwd" placeholder='Senha' required/>
                    <br />

                    <p>Não tenho Cadastro</p>
                    
                    <input type="submit" value='Entrar' />
                </form>



            </div >






        )
    }
}

export default Login