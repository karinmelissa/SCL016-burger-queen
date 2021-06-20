import React, { Component } from 'react';
import MainLogo from '../components/MainLogo.js';
import LoginForm from '../components/LoginForm.js';

class Login extends Component{
    render() {
        return <div>
                <MainLogo/>
                <LoginForm/>
            </div>;
    }
}
export default Login;