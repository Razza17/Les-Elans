import React from 'react'
import { Navbar, Nav, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => {
    return (
        <Navbar inverse collapseOnSelect fluid fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Col xsHidden smHidden>
                        <a to="/home"><Image className="logo" src="../img/logo.png" alt="Les Elans loisirs logo" /></a>
                    </Col>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <li><Link to="/home" activeStyle={{ color: '#f984fb' }}>Home</Link></li>
                    <li><Link to="/classement" activeStyle={{ color: '#f984fb' }}>Classement</Link></li>
                    <li><Link to="/stats" activeStyle={{ color: '#f984fb' }}>Stats</Link></li>
                    <li><Link to="/top5" activeStyle={{ color: '#f984fb' }}>Top 5</Link></li>
                    <li><a href="http://la-gaizette.fr/" target="_blank">La Gaizette</a></li>
                    <li><Link to="/contact" activeStyle={{ color: '#f984fb' }}>Contact</Link></li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}