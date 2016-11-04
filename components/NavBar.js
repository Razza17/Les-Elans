import React from 'react'
import { Navbar, Nav, NavItem, Col } from 'react-bootstrap'
import { Link } from 'react-router';

export default () => {
    return (
        <Navbar inverse collapseOnSelect fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <Col xsHidden>
                        <a href="#"><img className="logo" src="../img/logo.png" alt="Les Elans loisirs logo" /></a>
                    </Col>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem>
                        <Link to="/home" activeStyle={{ color: '#f984fb' }}>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/photos" activeStyle={{ color: '#f984fb' }}>Photos</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/classement" activeStyle={{ color: '#f984fb' }}>Classement</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/stats" activeStyle={{ color: '#f984fb' }}>Stats</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/top5" activeStyle={{ color: '#f984fb' }}>Top 5</Link>
                    </NavItem>
                    <NavItem href="http://la-gaizette.fr/" target="_blank">
                        La Gaizette
                    </NavItem>
                    <NavItem>
                        <Link to="/contact" activeStyle={{ color: '#f984fb' }}>Contact</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}