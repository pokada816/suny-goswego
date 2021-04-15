import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

class DriverListing extends React.Component { 
    
    render() {
        const mystyle = {
            borderBottom: "solid",
            padding: "10px 0px 10px 10px",
            borderWidth: "thin",
          };

        return (

            <Card body style={mystyle}>
                <h4> {this.props.name} </h4>

                <p> <strong> { this.props.startLoc } </strong> <FontAwesomeIcon icon={faLongArrowAltRight}/>  <strong> { this.props.dest }</strong>. Departing on <strong> { this.props.depDate }</strong>  at <strong> { this.props.depTime } </strong>   </p>

                <Button variant="success" style={{marginRight: "10px"}}> Request to Join </Button>

                <Button variant="info"> View Profile </Button>
                
            </Card>
           
        );
    }
}

export default DriverListing;