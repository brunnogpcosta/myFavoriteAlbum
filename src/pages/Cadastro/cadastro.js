import React, { Component } from 'react'

import '../Cadastro/cadastro.css'


class Cadastro extends Component {
    render() {
        return (
            <div className='container'>

                <form>
                    <h2>Cadastro</h2>
                    <input type="text" id="username" name="username" placeholder='E-mail' required />
                    <br />

                    <input type="password" id="pwd" name="pwd" placeholder='Senha' required />
                    <br />
                    <input type="password" id="pwdConfirme" name="pwd" placeholder='Repita a Senha' required />
                    <br />

                    <p>Tenho Cadastro</p>
                    
                    <input type="submit" value='Cadastrar' />
                </form>



            </div >

        )
    }


}


export default Cadastro;