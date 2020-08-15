import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import '../uploadImage/upload.css'

class Upload extends Component {
    render() {
        return (
            <div>
                <div id="fechar"><Link to="/galeria" className="fechar">&#10006;</Link></div>
                <div className='container'>

                    <form className='formUpload'>
                        <h2>Upload de Imagens</h2>


                        <figure>

                            <figcaption>

                            </figcaption>
                        </figure>

                        <input type="file" id="file" name="file" required />
                        <br />

                        <input type="text" id="caption" name="caption" placeholder='Legenda' required />
                        <br />

                        <input type="email" id="emailfor" name="emailfor" placeholder='Email da pessoa a compartilhar' required />
                        <br />


                        <input type="submit" className='enviarFoto' value='Salvar' />
                    </form>



                </div >

            </div>
        )
    }
}

export default Upload; 