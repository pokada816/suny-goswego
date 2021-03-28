import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'
import GoogleLogout, {logout} from 'react-google-login'
import logo from './logo.png'

export class App extends Component {

  googleResponse=(response)=> {
    console.log(response);
    console.log(response.profileObj);
  }
  
  render() {
    return (
      <div>
        <img src={logo} className = "center"/>
        <GoogleLogin className ="login-button"
          clientId="644041850309-32m3qpk5jlq07pmqem0tasjph8ge77pp.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.googleResponse}
          onFailure = {this.googleResponse}
          cookiePolicy={'single_host_origin'}
          hostedDomain="oswego.edu"
        />

        {/* <GoogleLogout
          clientId="644041850309-32m3qpk5jlq07pmqem0tasjph8ge77pp.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
          // onLogoutSuccess={logout}
        /> */}

      </div>
    )
  }
}

export default App 