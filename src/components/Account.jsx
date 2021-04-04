import React from "react";
import Profile from "./Profile.js";
import user from "../assets/user.png"
import {Tab, Tabs} from 'react-bootstrap'
import Navigation from './Navigation.jsx'

function Account() {

  const role = "Driver/Passenger"
  const email = "pokada@oswego.edu"
  const phoneNumber = "315-608-9954"
  const completedListings = "20"
  const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing. Neque egestas congue quisque egestas diam in arcu cursus. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate."

  const tabstyle = {
      height: '350px',
      width: '700px',
      overflowY: 'scroll',
      border: "solid 1px",
      paddingLeft: "10px" 
  }

  return (
    
    <div>
      <Navigation />

      <div class="profile-container">
          <br></br>
          <Profile
            photoSource = {user}
            name = "Jane Okada"
            rating = "4.5/5"> 
          </Profile>

      </div>

      <div className = "tabs-style">
               
               <Tabs defaultActiveKey="about" transition={false} id="noanim-tab-example">
                   <Tab eventKey="about" title="About" style={tabstyle}>
                     <br/>
                    <p> <strong> Role(s): </strong> {role} </p>
                    <p> <strong> Email: </strong> {email} </p>
                    <p> <strong> Phone number: </strong> {phoneNumber} </p>
                    <p> <strong> Completed Listings: </strong> {completedListings} </p>
                    <p> <strong> Short Bio: </strong> {bio} </p>
                   </Tab>
                   
                   <Tab eventKey="past-listings" title="Past Listings" style={tabstyle}>
                       <p> Here are my past listings</p> 
                   </Tab>

               </Tabs>

           </div>
    </div>
  );
}

export default Account;