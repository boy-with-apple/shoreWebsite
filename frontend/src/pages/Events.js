import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Calendar from '../components/Calendar/Calendar';
import { Form } from 'react-bootstrap';

class EventsPage extends Component {
    render() {
        return(
            <Container>
                <div>
                    <h1>Calendar</h1>
                    <Calendar/>
                </div>
                <Form.Label>Newsletter</Form.Label>
                <Form.Control type="text" name="" placeholder="Name"></Form.Control>
                <Form.Control type="text" name="" placeholder="Members"></Form.Control>
                <Form.Control type="text" name="" placeholder=""></Form.Control>
                <button type="submit" className="btn btn-primary">Register Band</button>
            </Container>
            
        )
    }   
}

export default EventsPage;