import React, {Component} from 'react';
import {Form, Col, InputGroup, Button} from 'react-bootstrap';
import SimpleMap from '../../components/Map';

import './Reservation.css'


class Reservation extends Component {
    constructor(...args) {
        super(...args);

        this.state = {validated: false};
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({validated: true});
    }

    render() {
        const {validated} = this.state;
        return (
            <div>
                <div className='hero-reserve'></div>
                <h2 className='text-center my-5'>Reservations</h2>
                <p className="d-block mx-auto w-25 text-center">
                    Welcome to use the online reservation system. We will have someone to contact you by phone after the reservation form below is submitted.
                </p>
                <p className="d-block mx-auto w-25 text-center">
                    To reserved the entire restaurant or big party reservation<br/>
                    please call 02-25705508
                </p>
                <p className="d-block mx-auto w-25 text-center">
                    Booking/booking deposit transfer<br/>
                    account number: (006) 3133 717 009992
                </p>
                <div className='container'>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={e => this.handleSubmit(e)}
                        className='py-5'
                    >
                        <Form.Row>
                            <Form.Group as={Col} md="3" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom03">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter phone"/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label className>Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter date"/>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom06">
                                <Form.Label className>Time</Form.Label>
                                <Form.Control type="time" placeholder="Enter time"/>
                                <Form.Text className="text-muted">
                                    Reservation window: 11:30 ~ 19:45
                                </Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} md='6' controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Special Request</Form.Label>
                                <Form.Control as="textarea" rows="1" width='30'/>
                                <Form.Text className="text-muted">
                                    We will try our best to accommodate your requests in best possible way
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" className='btn btn-secondary d-block mx-auto my-4'>Submit form</Button>
                    </Form>
                    <SimpleMap />
                </div>
            </div>
        )
    }
}

export default Reservation