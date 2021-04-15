import React, { useState } from "react";
import Profile from "./Profile.js";
import userPhoto from "../assets/user.png"
import {Tab, Tabs, Button} from 'react-bootstrap'
import Navigation from './Navigation.jsx'

function Account(props) {

  const [isDriver, setDriverState] = useState(1);

  // my own dummy data
  const role = "Driver/Passenger"
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

  const btnStyle = {
    display: {isDriver} === 0 ? "inline" : "none"
  }

  return (
    <div>
      <Navigation imageUrl = {props.info.imageUrl} />
      <Button className="float-right mt-5 mr-5" size="lg" style={btnStyle}> Become a Driver </Button>
      <div class="profile-container">
          <br></br>
          <Profile
            photoSource = {userPhoto}
            name = {props.info.name}
            rating = "4.5/5"> 
          </Profile>
      </div>

      <div className = "tabs-style">
              
          <Tabs defaultActiveKey="about" transition={false} id="noanim-tab-example">
              <Tab eventKey="about" title="About" style={tabstyle}>
                <br/>
              <p> <strong> Role(s): </strong> {role} </p>
              <p> <strong> Email: </strong> {props.info.email} </p>
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