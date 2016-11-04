import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'

export default class MoneyTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            couronnes: this.props.couronnes,
            pistoles: this.props.pistoles,
            sous: this.props.sous
        }
    };

    //Increment ou Decrement une monnaie

    CouronnesMoins(e) {
        e.preventDefault();
        (this.state.couronnes > 0 &&
            this.setState ({
                couronnes: this.state.couronnes - 1
            })
        );
    };

    CouronnesPlus(e) {
        e.preventDefault();
        this.setState ({
            couronnes: this.state.couronnes + 1
        })
    };

    PistolesMoins(e) {
        e.preventDefault();
        (this.state.pistoles > 0 &&
            this.setState ({
                pistoles: this.state.pistoles - 1
            })
        )
    };

    PistolesPlus(e) {
        e.preventDefault();
        this.setState ({
            pistoles: this.state.pistoles + 1
        })
    };

    SousMoins(e) {
        e.preventDefault();
        (this.state.sous > 0 &&
            this.setState ({
                sous: this.state.sous - 1
            })
        )
    };

    SousPlus(e) {
        e.preventDefault();
        this.setState ({
            sous: this.state.sous + 1
        })
    };

    //Passage d'une monnaie à une autre
    
    PistolesToCouronnes(e) {
        e.preventDefault();
        (this.state.pistoles > 20 &&
            this.setState ({
                couronnes: this.state.couronnes + 1,
                pistoles : this.state.pistoles - 20
            })
        )
    };

    CouronnesToPistoles(e) {
        e.preventDefault();
        (this.state.couronnes > 0 &&
            this.setState ({
                couronnes: this.state.couronnes - 1,
                pistoles : this.state.pistoles + 20
            })
        )
    };

    PistolesToSous(e) {
        e.preventDefault();
        (this.state.pistoles > 0 &&
            this.setState ({
                sous: this.state.sous + 12,
                pistoles : this.state.pistoles - 1
            })
        )
    };

    SousToPistoles(e) {
        e.preventDefault();
        (this.state.sous > 12 &&
            this.setState ({
                sous: this.state.sous - 12,
                pistoles : this.state.pistoles + 1
            })
        )
    };

    render() {
        return (
            <div className="col-xs-12">
                <Table condesed hover className="moneyTable">
                    <thead>
                        <tr className="text-uppercase">
                            <th className="text-center">Couronnes d'or</th>
                            <th>&nbsp;</th>
                            <th className="text-center">Pistoles d'argent</th>
                            <th>&nbsp;</th>
                            <th className="text-center">Sous de cuivre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center money">
                            <td>{this.state.couronnes}</td>
                            <td className="text-center">
                                <Button bsStyle="primary" onClick={this.PistolesToCouronnes.bind(this)}>+ 1 couronne</Button>
                                <Button bsStyle="primary" onClick={this.CouronnesToPistoles.bind(this)}>+ 20 pistoles</Button>
                            </td>
                            <td>{this.state.pistoles}</td>
                            <td className="text-center">
                                <Button bsStyle="primary" onClick={this.SousToPistoles.bind(this)}>+ 1 pistole</Button>
                                <Button bsStyle="primary" onClick={this.PistolesToSous.bind(this)}>+ 12 sous</Button>
                            </td>
                            <td>{this.state.sous}</td>
                        </tr>
                        <tr className="text-center">
                            <td>
                                <Button bsStyle="primary" onClick={this.CouronnesMoins.bind(this)}>-</Button>
                                <Button bsStyle="primary" onClick={this.CouronnesPlus.bind(this)}>+</Button>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <Button bsStyle="primary" onClick={this.PistolesMoins.bind(this)}>-</Button>
                                <Button bsStyle="primary" onClick={this.PistolesPlus.bind(this)}>+</Button>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <Button bsStyle="primary" onClick={this.SousMoins.bind(this)}>-</Button>
                                <Button bsStyle="primary" onClick={this.SousPlus.bind(this)}>+</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}