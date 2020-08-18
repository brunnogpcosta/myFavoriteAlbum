import React, { Component } from 'react'

import { Link } from 'react-router-dom' 

import '../homePage/homepage.css'
import Upload from '../uploadImage/upload'
import foto from '../homePage/foto-pessoa.jpg'

class HomePage extends Component {

    render() {
        return (

            <div className="tudo">

                <div className='Menu'>
                    <ul>
                        <li><Link to="/upload">Upload</Link></li>
                        <li>Configurações</li>
                        <li><Link to="/">Sair</Link></li>

                    </ul>
                </div>

                <div className="wrapper">
                    <h1>Minha Galeria de Fotos</h1>
                    <div className='Gallery'>
                        <figure>
                            <img src={foto} alt="foto do usuário"></img>
                            <figcaption>
                            Legenda da Foto
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={foto} alt="foto do usuário"></img>
                            <figcaption>
                            Legenda da Foto
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={foto} alt="foto do usuário"></img>
                            <figcaption>
                            Legenda da Foto
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={foto} alt="foto do usuário"></img>
                            <figcaption>
                            Legenda da Foto
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={foto} alt="foto do usuário"></img>
                            <figcaption>
                            Legenda da Foto
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={foto} alt="foto do usuário"></img>
                            <figcaption>
                            Legenda da Foto
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={foto} alt="foto do usuário"></img>
                            <figcaption>
                            Legenda da Foto
                            </figcaption>
                        </figure>

                    

                    </div>




                    <div className='pagination'>
                        <button>Anterior</button>
                  
                        <button>Próxima</button>
                    </div>
                </div>






            </div>



        )
    }
}

export default HomePage;