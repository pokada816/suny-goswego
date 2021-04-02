import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'
import GoogleLogout, {logout} from 'react-google-login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Homepage from "./components/Homepage.js";
import Account from "./components/Account.jsx";
import Help from "./components/Help.jsx";

export class App extends Component {

  // googleResponse=(response)=> {
  //   console.log(response);
  //   console.log(response.profileObj);
  // }
  
  // render() {
  //   return (
  //     <div className = "App mt-4">

  //       {/* <img src={logo} className = "center"/>
  //       <GoogleLogin className ="login-button"
  //         clientId="644041850309-32m3qpk5jlq07pmqem0tasjph8ge77pp.apps.googleusercontent.com"
  //         buttonText="Login"
  //         onSuccess={this.googleResponse}
  //         onFailure = {this.googleResponse}
  //         cookiePolicy={'single_host_origin'}
  //         hd="oswego.edu"
  //       />

  //       <GoogleLogout
  //         clientId="644041850309-32m3qpk5jlq07pmqem0tasjph8ge77pp.apps.googleusercontent.com"
  //         buttonText="Logout"
  //         hd="oswego.edu"
  //         onLogoutSuccess={logout}
  //       /> */}
      
        
  //       <TabNav tabs={['Driver Listings', 'Passenger Listings', 'My Listings']} selected = {this.state.selected} setSelected={this.setSelected}> 
  //         <Tab isSelected = { this.state.selected == 'Driver Listings'}> 
  //           {/* <p> This is the home.</p> */}
  //           <DriverListing
  //             name="Liam C."
  //             startLoc="Marano Campus Center"
  //             dest="Destiny Mall"
  //             depDate = "March 31, 2021"
  //             depTime = "12:00PM"
  //           >
  //           </DriverListing>

  //           <DriverListing
  //             name="Jane O."
  //             startLoc="Hart Hall"
  //             dest="Hancock Airport"
  //             depDate = "May 15, 2021"
  //             depTime = "2:00PM"
  //           >
  //           </DriverListing>
  //         </Tab>

  //         <Tab isSelected = { this.state.selected == 'Passenger Listings'}> 
  //           <p> Here are the passenger listings.</p>

  //         </Tab>

  //         <Tab isSelected = { this.state.selected == 'My Listings'}>
  //           <p> Here are my listings.</p>

  //         </Tab> 
  //       </TabNav>

  //     </div>

    render() {
      return (
      <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Homepage />} />
          <Route path="/account" exact component={() => <Account />} />
          <Route path="/help" exact component={() => <Help />} />

        </Switch>
        
      </Router>
      </div>
      );
    }
    
}

export default App 