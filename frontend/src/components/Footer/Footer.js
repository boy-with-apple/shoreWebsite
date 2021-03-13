import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { subscribeToNewsletter } from '../../lib/api/public';
import './Footer.css';

class Footer extends Component {

    state = {
        val: ""
    };

    onSubmit = async (e) => {
        e.preventDefault();

        const email =  this.state.val;
        if(!email){
            console.log("empty");
            return false;
        }
        console.log(email);

        try {
            await subscribeToNewsletter({ email });
            if (this.state.val) {
                    this.state.val = '';
                    document.querySelector('#newsletter').value = "";
                }
            console.log('non-error response is received');
            } catch (err) {
            console.log(err); //eslint-disable-line
            }
  };

    render() {
        return (
            <Container fluid className="footer">
                <Row>
                    <Col xs={12} md={{span:5,order:1}}>
                        <Row>
                            <Col xs={6} md={6} className="footerContent" id="footerContact">
                                    <h5>Contact Us</h5>
                                    <p>shoregrill@gmail.com</p>
                                    <p>(437)-555-0049</p>
                            </Col>
                            <Col xs={6} md={6} className="footerContent" id="footerAddress">
                                    <h5>Address</h5>
                                    <p>71 Lakeshore Rd E</p>
                                    <p>Mississauga, ON L5G 1C9</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{span:12, order: 'first'}} md={{span:2,order:2}}>
                        <Row className="logoRow">
                            <Col md={12} className="footerCenter footerLogo">
                                    <img src="./imgs/logo.png" id="footerLogoImg"></img>
                            </Col>
                            <Col md={12} className="footerCenter footerSocials">
                                <a href="#" className="hvr-icon-grow">
                                    <i className="fab fa-facebook hvr-icon"></i>
                                </a>
                                <a href="#" className="hvr-icon-grow">
                                    <i className="fab fa-instagram hvr-icon"></i>
                                </a>
                                <a href="#" className="hvr-icon-grow">
                                    <i className="fab fa-twitter hvr-icon"></i>
                                </a>
                            </Col>
                        </Row>
                        <hr></hr>
                    </Col>
                    <Col xs={12} md={{span:5,order:3}}>
                        <Row>
                            <Col xs={6} md={6} className="footerContent" id="footerHours">
                                    <h5>Business Hours</h5>
                                    <p>Mon-Wed: 11 - 8</p>
                                    <p>Thurs: 11 - 9</p>
                                    <p>Fri: 11 - 10</p>
                                    <p>Sat: 11 - 10</p>
                                    <p>Sun: 11 - 10</p>
                            </Col>
                            <Col xs={6} md={6} className="footerContent" id="footerEmail">
                                    <Form onSubmit={this.onSubmit}>
                                        <Form.Label>Newsletter</Form.Label>
                                        <Form.Control 
                                            id="newsletter"
                                            placeholder="Enter e-mail" 
                                            value={this.state.val}
                                            onChange={e => this.setState({val: e.target.value})}
                                            type="email"
                                        />
                                        <button type="submit" className="btn btn-primary" >Sign Up</button>
                                    </Form>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        )
    }   
}

export default Footer;