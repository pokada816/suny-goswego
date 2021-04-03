import React from "react";
import { Link, withRouter } from "react-router-dom";
import user from "../assets/user.png"

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        
          <Link class="navbar-brand mr-auto" to="/">
            SUNY GOswego
          </Link>
          <div>
    
            <ul class="navbar-nav ml-auto">

              <li
                class={`nav-item  ${
                  props.location.pathname === "/account" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/account">
                  Account
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/help" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/help">
                  Help
                </Link>
              </li>

              <img src={user} style={{width: '50px', height: '50px'}}></img>
            </ul>
          </div>
        
      </nav>
    </div>
  );
}

export default withRouter(Navigation);