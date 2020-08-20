import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    BrowserRouter,
    Switch
} from 'react-router-dom'


import Home from './pages/home/home'
import Login from './pages/Login/login'
import Cadastro from './pages/Cadastro/cadastro';
import Galeria from './pages/Galeria/galeria';
import Upload from './pages/uploadImage/upload';
import NotFound from './pages/NotFound/notFound';


function Routes() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/galeria" component={Galeria} />
                <Route path="/upload" component={Upload} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )

}


export default Routes;