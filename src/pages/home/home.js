import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../home/home.css'


class Home extends Component {
    render() {
        return (
            <div id="conteudo">
                <div className="bkg">
                </div>

                <div className="information">
                    <h1>My Favorite Album</h1>
                    <h3>A sua galeria preferida</h3>

                    <div className="butoes">
                        <button>Entrar</button>
                        <button>Cadastrar</button>
                    </div>
                </div>
            </div>
        )
    }


}


export default Home;