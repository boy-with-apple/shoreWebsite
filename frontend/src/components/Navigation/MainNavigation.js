import React, {Component} from 'react';
import './MainNavigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';



class mainNavigation extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          navExpanded: false
        };
      }
    
      setNavExpanded = (expanded) => {
        this.setState({ navExpanded: expanded });
      }
    
      setNavClose = () => {
        this.setState({ navExpanded: false });
      }

    render() {
        return (
        <Navbar expand="md" bg="dark" variant="dark" expanded={this.state.navExpanded} onToggle={this.setNavExpanded}>
            <Navbar.Brand>
                <Nav.Link to="/home">
                    <Image src='./imgs/logo.png'/>
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" onClick={this.setNavClose}>
                    <NavLink to="/about" className="mainItem" >   
                            About
                    </NavLink>
                    <NavLink to="/menu" className="mainItem" >   
                            Menu
                    </NavLink>
                    <NavLink to="/entertainment" className="mainItem" >   
                            Entertainment
                    </NavLink>
                    <NavLink to="/events" className="mainItem" >   
                            Events
                    </NavLink>
            </Nav>

            {/* AUTH BUTTONS */}
            <Nav className="authBtns" onClick={this.setNavClose}>
                <Nav.Link to="/login">
                        <Button>Login</Button>
                </Nav.Link>
                <Nav.Link to="/signup">
                    <Button>Join</Button>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default mainNavigation;
    
