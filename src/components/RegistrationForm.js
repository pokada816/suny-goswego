import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { Form, Col } from 'react-bootstrap';
import { isEmail } from 'validator';

class RegisterForm extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            identificationNumber: '',
            contactFirstName: '',
            contactLastName: '',
            contactPhoneNumber: '',
            contactEmail: ''
        },
        errors: {}   
    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const {data} = this.state;
        let errors = {};

        if (data.firstName === '') errors.firstName = 'First name must be entered.';
        if (data.lastName === '') errors.lastName = 'First name must be entered.';
        if (data.phoneNumber === '') errors.phoneNumber = 'Phone Number must be valid';
        if (data.identificationNumber === '') errors.identificationNumber = 'Identification number can not be blank.';
        if(!isEmail(data.contactEmail)) errors.contactEmail = 'Email must be valid.';
        if (data.contactEmail === '') errors.contactEmail = 'Email of emergency contact can not be blank.';
        if (data.contactFirstName === '') errors.contactFirstName = 'First name of emergency contact must be entered.';
        if (data.contactLastName === '') errors.contactLastName = 'Last name of emergency contact must be entered.';
        if (data.contactPhoneNumber === '') errors.fullName = 'Phone number of emergency contact must be entered.';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {data} = this.state;

        const errors = this.validate();

        if(Object.keys(errors).length === 0) {
            console.log(data);
            //call an api here
            //Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { data, errors } = this.state;

        const divstyle = {
            padding: "2rem 0 1rem 0",
            backgroundColor: "rgba(0,0,0,0.08)"
        }

        const contstyle = {
            padding: "4rem 6rem 4rem 6rem",
            backgroundColor: "white",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            width: "50rem"
        }

        return ( 
            <div style={divstyle}>

            <Container style={contstyle}>
                <h1 style={{marginBottom: "3rem"}}> User Registration Form </h1>
                <Form onSubmit={this.handleSubmit}>

                <Form.Row>
                    <Col>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input id ="firstName" value={data.firstName} invalid={errors.firstName ? true : false} name= "firstName" onChange={this.handleChange} />
                            <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input id ="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name= "lastName" onChange={this.handleChange} />
                            <FormFeedback>{errors.lastName}</FormFeedback>
                        </FormGroup>
                    </Col>
                </Form.Row>
               
                <FormGroup>
                    <Label for="identificationNumber"> Oswego ID number </Label>
                    <Input id ="identificationNumber" value={data.identificationNumber} invalid={errors.identificationNumber ? true : false} name="identificationNumber" onChange={this.handleChange} />
                    <FormFeedback> {errors.identificationNumber}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="phoneNumber">Phone number</Label>
                    <Input id ="phoneNumber" value={data.phoneNumber} invalid={errors.phoneNumber ? true : false} name= "phoneNumber" onChange={this.handleChange} />
                    <FormFeedback>{errors.phoneNumber} </FormFeedback>
                </FormGroup>

                <Form.Group controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                </Form.Group>

                <br />
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I want to be a driver." />
                </Form.Group>

                <br/> 
                <h4>Emergency Contact </h4>               
                <br/>

                <Form.Row>
                    <Col>
                        <FormGroup>
                            <Label for="contactFirstName">First Name</Label>
                            <Input id ="contactFirstName" value={data.contactFirstName} invalid={errors.contactFirstName ? true : false} name= "contactFirstName" onChange={this.handleChange} />
                            <FormFeedback>{errors.contactFirstName}</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="contactLastName">Last Name</Label>
                            <Input id ="contactLastName" value={data.contactLastName} invalid={errors.contactLastName ? true : false} name= "contactLastName" onChange={this.handleChange} />
                            <FormFeedback>{errors.contactLastName}</FormFeedback>
                        </FormGroup>
                    </Col>
                </Form.Row>  

                <FormGroup>
                    <Label for="contactPhoneNumber">Phone number</Label>
                    <Input id ="contactPhoneNumber" value={data.contactPhoneNumber} invalid={errors.phoneNumber ? true : false} name= "contactPhoneNumber" onChange={this.handleChange} />
                    <FormFeedback>{errors.phoneNumber} </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="contactEmail"> Email</Label>
                    <Input id ="contactEmail" value={data.contactEmail} invalid={errors.email ? true : false} name="contactEmail" onChange={this.handleChange} />
                    <FormFeedback> {errors.contactEmail} </FormFeedback>    
                </FormGroup>

                <br/>
                <Button color="primary">Register</Button>
                </Form>
            </Container>
            </div>
        );
    }

}

export default RegisterForm;

