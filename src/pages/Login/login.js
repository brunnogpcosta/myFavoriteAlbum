import React, { Component } from 'react';

import '../Login/login.css'



class Login extends Component {

    render() {
        return (
            <div>

                <form>

                    <input type="text" id="username" name="username" />
                    <br />

                    <input type="password" id="pwd" name="pwd" />
                </form>



            </div >






        )
    }
}

export default Login