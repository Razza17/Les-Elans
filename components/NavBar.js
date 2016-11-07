import React from 'react'
import { Navbar, Nav, NavItem, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router';

export default () => {
    return (
        <Navbar inverse collapseOnSelect fluid fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Col xsHidden smHidden>
                        <a href="#/home"><Image className="logo" src="../img/logo.png" alt="Les Elans loisirs logo" /></a>
                    </Col>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem href="#/home" activeStyle={{ color: '#f984fb' }}>
                        Home
                    </NavItem>
                    <NavItem href="#/photos" activeStyle={{ color: '#f984fb' }}>
                        Photos
                    </NavItem>
                    <NavItem href="#/classement" activeStyle={{ color: '#f984fb' }}>
                        Classement
                    </NavItem>
                    <NavItem href="#/stats" activeStyle={{ color: '#f984fb' }}>
                        Stats
                    </NavItem>
                    <NavItem href="#/top5" activeStyle={{ color: '#f984fb' }}>
                        Top 5
                    </NavItem>
                    <NavItem href="http://la-gaizette.fr/" activeStyle={{ color: '#f984fb' }}>
                        La Gaizette
                    </NavItem>
                    <NavItem href="#/contact" activeStyle={{ color: '#f984fb' }}>
                        Contact
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}