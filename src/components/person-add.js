import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addperson } from '../actions/person-actions';
import { FormControl, FormGroup, Button, ControlLabel, Grid, Col, Row } from 'react-bootstrap'
import { findDOMNode } from 'react-dom';

class PersonAdd extends Component {

    handlePersonAdd() {
        var user = findDOMNode(this.refs.name).value.trim() 
        var email = findDOMNode(this.refs.email).value.trim()
        var age = findDOMNode(this.refs.age).value.trim()
        
        if(user.length > 0 && email.length > 0 && age.length > 0 ){

            this.props.onAdd({ "name": user, "email": email, "age": age });
        }else{
            findDOMNode(this.refs.validationLabel).value = 'please enter mandatory field';
        }
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={8} xsOffset={2}>
                        <div className="text-center">
                            <h3> Add Person </h3>
                        </div>
                       
                        <br></br>
                        <FormGroup controlId="formControlsUser" type="text" >
                            <ControlLabel>Name*</ControlLabel>
                            <FormControl ref="name" placeholder="Name" />
                        </FormGroup>
                        <FormGroup controlId="formControlsEmail" type="text" >
                            <ControlLabel>Email*</ControlLabel>
                            <FormControl ref="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup controlId="formControlsAge" type="text" >
                            <ControlLabel>Age*</ControlLabel>
                            <FormControl ref="age" placeholder="Age" />
                        </FormGroup>
                        <Button block bsStyle="warning" type="submit" onClick={this.handlePersonAdd.bind(this)}>Add</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (person) => {
            dispatch(addperson(person))
        }
    }
}

export default connect(null, mapDispatchToProps)(PersonAdd)