import React, { Component } from 'react';



import '../uploadImage/upload.css'

class Upload extends Component {
    render() {
        return (

            <div className='container'>

                <form>
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

    
                    <input type="submit" value='Salvar' />
                </form>



            </div >)
    }
}

export default Upload; 