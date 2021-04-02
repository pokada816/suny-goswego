import React from 'react';
import {Tab, Tabs} from 'react-bootstrap'
import DriverListing from './DriverListing.js'

class TabNav extends React.Component {
    
    render(){
        const mystyle = {
            marginTop: '50px',
            width: '30%',
            marginLeft: '30px'
        }

        const tabstyle = {
            height: '500px',
            width: '500px',
            overflowY: 'scroll'
        }

        return (
            <div style={mystyle}>
               
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
                    
                    <Tab eventKey="passenger-listings" title="Passenger Listings">
                        <p> Here are passenger listings</p> 
                    </Tab>

                    <Tab eventKey="my-listings" title="My Listings">
                        <p> Here are my listings </p>
                    </Tab>
                </Tabs>

            </div>
        );
    }
}

export default TabNav; 