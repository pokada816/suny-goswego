import React from 'react';
import {Button} from 'react-bootstrap';

class DriverListing extends React.Component { 
    render() {
        const mystyle = {
            border: "solid",
            borderWidth: "thin",
          };

        return (

            <div style={mystyle}> 
            {/* Photo */}

            {/* Name */}
            <p> {this.props.name} </p>

            {/* Starting Location */}

            <p> { this.props.startLoc } to { this.props.dest } </p>
            <p>  Departing on { this.props.depDate } at { this.props.depTime } </p>

            <Button variant="success"> Request to Join </Button>
            <Button variant="info"> View Profile </Button>

            </div>

        );
    }
}

export default DriverListing;