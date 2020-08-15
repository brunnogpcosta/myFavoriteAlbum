import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/login'
import Cadastro from './pages/Cadastro/cadastro';
import HomePage from './pages/homePage/homepage';
import Upload from './pages/uploadImage/upload';
import NotFound from './pages/NotFound/notFound'


function Routes() {

    return (


        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/galeria" exact component={HomePage} />
            <Route path="/upload" exact component={Upload} />
            <Route component={NotFound} />

        </BrowserRouter>



    )

}


export default Routes;