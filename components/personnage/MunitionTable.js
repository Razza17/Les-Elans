import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Wolfgang from '../../data/Wolfgang.json';


export default class FortuneTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            munition: Wolfgang.munition
        };

        this.decrementMunition = this.decrementMunition.bind(this);
        this.incrementMunition = this.incrementMunition.bind(this);

    };

    decrementMunition(e) {
        e.preventDefault();
        (this.state.munition - 1 >= 0 &&
            this.setState({
                munition: this.state.munition - 1
            })
        );
    }

    incrementMunition(e) {
        e.preventDefault();
        this.setState({
            munition: this.state.munition + 1
        });
    }

    render() {

        return (
            <div className="col-xs-12">
                <Table striped condensed hover className="text-center">
                    <tbody>
                        <tr>
                            <td>Munitions : <strong>{this.state.munition} flèches</strong></td>
                            <td><Button bsStyle="primary" onClick={this.decrementMunition}>-</Button></td>
                            <td><Button bsStyle="primary" onClick={this.incrementMunition}>+</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}