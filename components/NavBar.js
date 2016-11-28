import React from 'react'
import { Navbar, Nav, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => {
    return (
        <Navbar inverse collapseOnSelect fluid fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Col xsHidden smHidden>
                        <Link to="/"><Image className="logo" src="../img/logo.png" alt="Les Elans loisirs logo" /></Link>
                    </Col>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/classement" activeClassName="active">Classement</Link></li>
                    <li><Link to="/stats" activeClassName="active">Stats</Link></li>
                    <li><Link to="/top5" activeClassName="active">Top 5</Link></li>
                    <li><a href="http://la-gaizette.fr/" target="_blank">La Gaizette</a></li>
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}