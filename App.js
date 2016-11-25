import React, { Component } from 'react';import { Grid, Row, Col } from 'react-bootstrap'import NavBar from './components/NavBar';export default class App extends Component {    render() {        return (            <Grid>                <Row>                    <Col xs={12}>                        <NavBar location={this.props.location}/>                    </Col>                </Row>                <Row className="content">                    {this.props.children}                </Row>            </Grid>        );    }}