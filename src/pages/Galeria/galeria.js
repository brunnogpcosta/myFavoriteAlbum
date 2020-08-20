import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import '../Galeria/galeria.css'
import Upload from '../uploadImage/upload'
import foto from '../Galeria/foto-pessoa.jpg'
import upl from '../Galeria/upload.svg'
import cofg from '../Galeria/settings.svg'
import lout from '../Galeria/log-out.svg'

import '../../index.css'


class Galeria extends Component {

    render() {
        return (

            <div className="tudo">

                <div className='Menu'>
                    <ul>
                        <li><Link to="/upload"><img src={upl} alt="Upload de Fotos" title="Upload de Fotos"></img></Link></li>
                        <li><Link to="/dasdasd"><img src={cofg} alt="Configurações" title="Configurações"></img></Link></li>
                        <li><Link to="/"><img src={lout} alt="Sair" title="Sair"></img></Link></li>
                    </ul>
                </div>

                <div className="wrapper">
                    {/*<h1>Minha Galeria de Fotos</h1>*/}
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

export default Galeria;