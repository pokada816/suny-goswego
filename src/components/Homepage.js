import React from "react";
import {Tabs, Tab , Card, Nav } from 'react-bootstrap';
import DriverListing from './DriverListing.js';
import PassengerListing from './PassegerListing.js';
import { Button, ButtonGroup } from 'react-bootstrap'
import Navigation from './Navigation.jsx'
import PLForm from './PLForm.js'
import DLForm from './DLForm.js'

class Homepage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const tabstyle = {
      height: '28rem',
      width: '58rem',
      overflowY: 'scroll',
      border: "solid 1px rgba(0,0,0,0.5)",
      borderRadius: "2px",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    }

    return (
      <div>
        <Navigation imageUrl={this.props.info.imageUrl}/>
        <div> 
        <ButtonGroup vertical className = "float-right" style = {{marginRight: "50px", marginTop : "5%"}}>
          <DLForm/> 
          {/* <Button variant="success" style = {{marginBottom: "20px"}}> Create Driver Listing </Button> */}
          {/* <Button variant="success" onClick={PLForm}> Create Passenger Listing </Button> */}
          <PLForm />
        </ButtonGroup>
          
        <div className = "tabs-style">
          <h1 style={{marginBottom: '20px'}}> All Listings </h1>

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
        
      </div>
    );
  }
  
}

export default Homepage;