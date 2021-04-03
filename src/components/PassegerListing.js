import React from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'


class PassengerListing extends React.Component { 
    render() {

        const mystyle = {
            borderBottom: "solid",
            padding: "10px 50px 20px 10px",
            borderWidth: "thin",
            width: "90%"
          };

        return (

            <div style={mystyle}> 
          
                <h5> {this.props.name} </h5>
                <p> From <strong> { this.props.startLoc } </strong> <FontAwesomeIcon icon={faLongArrowAltRight} /> <strong> { this.props.dest } </strong> </p>
                <p>  Departing on <strong> { this.props.depDate }</strong>  at <strong> { this.props.depTime } </strong>   </p>

                <Button variant="success" style={{marginRight: "10px"}}> Request to Drive </Button>
                <Button variant="info"> View Profile </Button>

            </div>

        );
    }
}

export default PassengerListing;