import React from "react";
import Navigation from './Navigation.jsx'

function Help(props) {
  return (
    <div>
    <Navigation imageUrl = {props.info.imageUrl} />
      <div class="container">
          <br></br>
            <h1 class="font-weight-light">Frequently Asked Questions:</h1>
            <br/>
            <h3>
              Q1: What are driver listings? 
            </h3>
            <p> blah blah blah </p>
        
      </div>
    </div>
  );
}

export default Help;