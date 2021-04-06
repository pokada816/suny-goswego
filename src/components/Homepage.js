import React from "react";
import {Tabs, Tab } from 'react-bootstrap';
import DriverListing from './DriverListing.js';
import PassengerListing from './PassegerListing.js';
import { Button, ButtonGroup } from 'react-bootstrap'
import Navigation from './Navigation.jsx'

class Homepage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: 'Driver Listings'
    }
  }

  setSelected = (tab) => {
    this.setState({ selected:tab });
  }

  render() {

    const buttonStyle = {
      marginRight: "50px",
      marginBottom: "20px"
    }

    const tabstyle = {
      height: '400px',
      width: '700px',
      overflowY: 'scroll',
      border: "solid 1px",
      paddingLeft: "10px" 
  }

    return (
      <div>
        <Navigation />

        <ButtonGroup vertical className = "float-right" style = {{marginRight: "50px", marginTop : "5%"}}>
          <Button variant="success" style = {{marginBottom: "20px"}}> Create Driver Listing </Button>
          <Button variant="success"> Create Passenger Listing </Button>
        </ButtonGroup>
          
        <div className = "tabs-style">
          <h1 style={{marginBottom: '20px'}}> Listings </h1>

          {/* Tabs component from ReactBootstrap */}
          <Tabs defaultActiveKey="driver-listings" transition={false} id="noanim-tab-example">
              <Tab eventKey="driver-listings" title="Driver Listings" style={tabstyle}>
                <DriverListing
                    name="Liam C."
                    startLoc="Marano Campus Center"
                    dest="Destiny Mall"
                    depDate = "March 31, 2021"
                    depTime = "12:00PM"
                    >
                </DriverListing>

                <DriverListing
                    name="Jane O."
                    startLoc="Hart Hall"
                    dest="Hancock Airport"
                    depDate = "May 15, 2021"
                    depTime = "2:00PM"
                    >
                </DriverListing>


                <DriverListing
                    name="Ethan S."
                    startLoc="Hart Hall"
                    dest="Hancock Airport"
                    depDate = "May 15, 2021"
                    depTime = "2:00PM"
                    >
                </DriverListing>

                <DriverListing
                    name="Ayinde E."
                    startLoc="Hart Hall"
                    dest="Hancock Airport"
                    depDate = "May 15, 2021"
                    depTime = "2:00PM"
                    >
                </DriverListing>

              </Tab>
              
              <Tab eventKey="passenger-listings" title="Passenger Listings" style={tabstyle}>
                  <PassengerListing
                  name="Jane O."
                  startLoc="Hart Hall"
                  dest="Hancock Airport"
                  depDate = "May 15, 2021"
                  depTime = "2:00PM"
                  > </PassengerListing>

                  <PassengerListing
                  name="Jane O."
                  startLoc="Hart Hall"
                  dest="Hancock Airport"
                  depDate = "May 15, 2021"
                  depTime = "2:00PM"
                  > </PassengerListing>

                  <PassengerListing
                  name="Jane O."
                  startLoc="Hart Hall"
                  dest="Hancock Airport"
                  depDate = "May 15, 2021"
                  depTime = "2:00PM"
                  > </PassengerListing>

              </Tab>

              <Tab eventKey="my-listings" title="My Listings">
                  <p> Here are my listings </p>
              </Tab>
          </Tabs>

        </div>
          
      </div>
    );
  }
  
}

export default Homepage;