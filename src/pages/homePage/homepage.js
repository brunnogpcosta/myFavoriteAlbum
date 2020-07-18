import React, { Component } from 'react'

import '../homePage/homepage.css'

class HomePage extends Component {

    render() {
        return (

            <div>

                <div className='leftMenu'>
                    <ul>
                        <li>Upload</li>
                        <li>Configurações</li>
                        <li>Sair</li>

                    </ul>
                </div>

                <div className="wrapper">
                    <h1>My Gallery</h1>
                    <div className='Gallery'>
                        <figure>
                            <figcaption>

                            </figcaption>
                        </figure>

                        <figure>
                            <figcaption>

                            </figcaption>
                        </figure>

                        <figure>
                            <figcaption>

                            </figcaption>
                        </figure>

                        <figure>
                            <figcaption>

                            </figcaption>
                        </figure>

                        <figure>
                            <figcaption>

                            </figcaption>
                        </figure>

                        <figure>
                            <figcaption>

                            </figcaption>
                        </figure>

                        <figure>
                            <figcaption>

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