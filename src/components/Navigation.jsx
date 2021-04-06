import React from "react";
import { Link, withRouter } from "react-router-dom";

// dis the navbar 

function Navigation(props) {

  const authInstance = window.gapi.auth2.getAuthInstance()
  const user = authInstance.currentUser.get()
  const profile = user.getBasicProfile()
  const email = profile.getEmail() 
  const imageUrl = profile.getImageUrl()

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        
          <Link className="navbar-brand mr-auto" to="/">
            SUNY GOswego
          </Link>
          <div>
    
            <ul className="navbar-nav ml-auto">

              <li
                className={`nav-item  ${
                  props.location.pathname === "/account" ? "active" : ""
                }`}
                style = {{marginRight: "15px"}}
              >
                <Link className="nav-link" to="/account">
                  Account
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/help" ? "active" : ""
                }`}
                style = {{marginRight: "23px"}}
              >
                <Link className="nav-link" to="/help">
                  Help
                </Link>
              </li>

              
              <img src={imageUrl} style={{width: '40px', height: '40px', marginRight: "20px"}}></img>
            </ul>
          </div>
        
      </nav>
    </div>
  );
}

export default withRouter(Navigation);