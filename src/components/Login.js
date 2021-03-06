import React from 'react';
import logo from '../assets/logo.png'

class Login extends React.Component {

    componentDidMount() {
        window.gapi.load('signin2', () => {
            window.gapi.signin2.render('login-button')
        })
    }

    render () {

        return (
            <div className = "login"> 
                <img src={logo} id="logo"/>
                <div id ="login-button"> Sign in with Google </div>
            </div> 
        );
    } 
}  

export default Login; 