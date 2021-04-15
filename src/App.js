import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage.js";
import Account from "./components/Account.jsx";
import Help from "./components/Help.jsx";
import Login from "./components/Login.js";
import RegistrationForm from "./components/RegistrationForm.js";

class App extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        isSignedIn: null,
        isRegistered: true,
        email: '',
        name: '',
        imageUrl: ''
      }
    }

    initializeGoogleSignIn() {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: '644041850309-32m3qpk5jlq07pmqem0tasjph8ge77pp.apps.googleusercontent.com',
          hosted_domain: 'oswego.edu'
        }).then(() => {
          const authInstance = window.gapi.auth2.getAuthInstance()
          const isSignedIn = authInstance.isSignedIn.get()
          const user = authInstance.currentUser.get()
          const profile = user.getBasicProfile()
          const email = profile.getEmail() 
          const name = profile.getName()
          const imageUrl = profile.getImageUrl()

          this.setState({isSignedIn})
          this.setState({email: email, name: name, imageUrl: imageUrl})

          authInstance.isSignedIn.listen(isSignedIn => {
            this.setState({isSignedIn})
          })
        })
      })
    }

    // just some import for google signin
    componentDidMount() {
      const script = document.createElement('script')
      script.src = 'https://apis.google.com/js/platform.js'
      script.onload = () => this.initializeGoogleSignIn()
      document.body.appendChild(script)
    }

    // if user is signed in show homepage, if not show login
    ifUserSignedInAndRegistered(Component) { 
      if (this.state.isSignedIn) {
        if (this.state.isRegistered) {
          return <Homepage info = {this.state} />
        } else {
          return <RegistrationForm isRegistered={this.state.isRegistered}/>
        } 
      } else {
        return <Login isSignedIn={this.state.isSignedIn}/>
      }
    }

    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" render = {() => // default to homepage (or login page if not signed in)
                this.ifUserSignedInAndRegistered(Homepage)
                }>
            </Route> 

            <Route exact path="/account" exact component={() => <Account info = {this.state} />} />
            <Route exact path="/help" exact component={() => <Help info = {this.state}/>} />

          </Switch>
          
        </Router>
      );
    }
}

export default App 