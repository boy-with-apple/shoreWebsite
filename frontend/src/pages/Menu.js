import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Menu.css';
const menu1 = "./imgs/menu1.jpg"
const menu2 = "./imgs/menu2.jpg"
class MenuPage extends Component {
    render() {
        return(
        <Container className="menuPage">
            <div className="menu">
            <img src={menu1}/>
            <img src={menu2}/>
        </div>
        </Container>
        )
    }   
}

export default MenuPage;