import React from 'react'
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router';

export default () => {
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem>
                        <Link to="/home" activeStyle={{ color: 'white' }}>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/photos" activeStyle={{ color: 'white' }}>Photos</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/photos" activeStyle={{ color: 'white' }}>Classement</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/photos" activeStyle={{ color: 'white' }}>Stats</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/photos" activeStyle={{ color: 'white' }}>Top 5</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/photos" activeStyle={{ color: 'white' }}>La Gaizette</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/photos" activeStyle={{ color: 'white' }}>Contact</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}