import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/login'
import Cadastro from './pages/Cadastro/cadastro';
import HomePage from './pages/homePage/homepage';
import Upload from './pages/uploadImage/upload';


function Routes() {

    return (


        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/galeria" component={HomePage} />
            <Route path="/upload" component={Upload} />

        </BrowserRouter>



    )

}


export default Routes;