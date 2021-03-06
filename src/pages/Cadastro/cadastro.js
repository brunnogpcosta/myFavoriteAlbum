import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../Cadastro/cadastro.css'


class Cadastro extends Component {
    render() {
        return (
            <div className='container'>

                <form className='formCadastro'>
                    <h2>Cadastro</h2>
                    <input type="email" id="username" name="username" placeholder='E-mail' required />
                    <br />

                    <input type="password" id="pwd" name="pwd" placeholder='Senha' required />
                    <br />
                    <input type="password" id="pwdConfirme" name="pwd" placeholder='Repita a Senha' required />
                    <br />

                    <p><Link to="/" className="linkStyle">Tenho Cadastro</Link></p>
                    
                    <input type="submit"  className='enviarCadastro' value='Cadastrar' />
                </form>



            </div >

        )
    }


}


export default Cadastro;