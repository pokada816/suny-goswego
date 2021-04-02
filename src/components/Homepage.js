import React from "react";
import TabNav from './TabNav.js';
import Tab from './Tab.js';
import DriverListing from './DriverListing.js';

class Home extends React.Component {

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
    return (
      <div>
            <TabNav tabs={['Driver Listings', 'Passenger Listings', 'My Listings']} selected = {this.state.selected} setSelected={this.setSelected}> 
            <Tab isSelected = { this.state.selected == 'Driver Listings'}> 
              {/* <p> This is the home.</p> */}
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
            </Tab>
  
            <Tab isSelected = { this.state.selected == 'Passenger Listings'}> 
              <p> Here are the passenger listings.</p>
  
            </Tab>
  
            <Tab isSelected = { this.state.selected == 'My Listings'}>
              <p> Here are my listings.</p>
  
            </Tab> 
          </TabNav>
      </div>
    );
  }
  
}

export default Home;