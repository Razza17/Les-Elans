import React from 'react'
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router';

export default () => {
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    Hello Wolfgang !
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem>
                        <Link to="/personnage" activeStyle={{ color: 'white' }}>Personnage et Caractéristiques</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/equipement" activeStyle={{ color: 'white' }}>Equipement</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}