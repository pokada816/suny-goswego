import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Homepage from "./components/Homepage.js";
import Account from "./components/Account.jsx";
import Help from "./components/Help.jsx";
import Login from "./components/Login.js"

class App extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        isSignedIn: null
      }
    }

    initializeGoogleSignIn() {
      window.gapi.load('auth2', () => {
        const authInstance = window.gapi.auth2.getAuthInstance()
        const isSignedIn = authInstance.isSignedIn.get()
        this.setState({isSignedIn})

        authInstance.isSignedIn.listen(isSignedIn => {
          this.setState({isSignedIn})
        })
      })
    }

    componentDidMount() {
      const script = document.createElement('script')
      script.src = 'https://apis.google.com/js/platform.js'
      script.onload = () => this.initializeGoogleSignIn()
      document.body.appendChild(script)
    }

    ifUserSignedIn(Component) { 
      return this.state.isSignedIn ?
        <Component /> :
        <Login isSignedIn={this.state.isSignedIn}/>
    }

    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" render = {() => 
                this.ifUserSignedIn(Homepage)}>
            </Route> 

            <Route exact path="/account" exact component={() => <Account />} />
            <Route exact path="/help" exact component={() => <Help />} />
          </Switch>
          
        </Router>
      );
    }
    
}

export default App 