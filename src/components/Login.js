import React from 'react';

class Login extends React.Component {

    componentDidMount() {
        window.gapi.load('signin2', () => {
            window.gapi.signin2.render('login-button')
        })
    }

    render () {

        if (this.props.signedIn === null) {
            return <h1> Checking if you're signed in. </h1>
        }

        return (
            <div> 
                <div id ="login-button"> Sign in with Google </div>
            </div> 
        );
    } 
}  

export default Login; 