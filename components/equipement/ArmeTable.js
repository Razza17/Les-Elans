import React, { Component } from 'react';
import Arme from './Arme';
import { Table, Button } from 'react-bootstrap';
import Wolfgang from '../../data/Wolfgang.json';


export default class ArmeTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom: '',
            encombrement: '',
            degats: '',
            portee: '',
            recharge: '',
            attribut: '',
            weapon: Wolfgang.arme
        };

        this.updateState = this.updateState.bind(this);
        this.handleNewName = this.handleNewName.bind(this);
        this.handleNewEncombrement = this.handleNewEncombrement.bind(this);
        this.handleNewDegats = this.handleNewDegats.bind(this);
        this.handleNewPortee = this.handleNewPortee.bind(this);
        this.handleNewRecharge = this.handleNewRecharge.bind(this);
        this.handleNewAttribut = this.handleNewAttribut.bind(this);

    };

    handleNewName(e) {
        this.setState({nom: e.target.value});
    }

    handleNewEncombrement(e) {
        this.setState({encombrement: e.target.value});
    }

    handleNewDegats(e) {
        this.setState({degats: e.target.value});
    }

    handleNewPortee(e) {
        this.setState({portee: e.target.value});
    }

    handleNewRecharge(e) {
        this.setState({recharge: e.target.value});
    }

    handleNewAttribut(e) {
        this.setState({attribut: e.target.value});
    }

    updateState(e) {

        const {weapon, nom, encombrement, degats, portee, recharge, attribut} = this.state;
        e.preventDefault();

        weapon.push({nom:nom, encombrement:encombrement, degats:degats, portee:portee, recharge:recharge, attribut:attribut});
        this.setState({weapon: weapon});
        console.log(weapon);

    }

    render() {

        const {weapon} = this.state;

        return (
            <div className="col-xs-12">
                <form className="armeForm" onSubmit={this.updateState}>
                    <Table condensed hover className="text-center">
                        <thead>
                            <tr>
                                <th className="text-center">Armes</th>
                                <th className="text-center">Enc.</th>
                                <th className="text-center">Dégats</th>
                                <th className="text-center">Portée</th>
                                <th className="text-center">Recharg.</th>
                                <th className="text-center">Attributs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                weapon.map((arme, i) =>
                                    <Arme key={i} {...arme} />
                                )
                            }
                            <tr>
                                <td><input type="text" size="10" placeholder="Nom de l'arme" onChange={this.handleNewName} /></td>
                                <td><input type="text" size="10" placeholder="Encombrement" onChange={this.handleNewEncombrement} /></td>
                                <td><input type="text" size="10" placeholder="Dégâts" onChange={this.handleNewDegats} /></td>
                                <td><input type="text" size="10" placeholder="Portée" onChange={this.handleNewPortee} /></td>
                                <td><input type="text" size="10" placeholder="Recharge" onChange={this.handleNewRecharge} /></td>
                                <td><input type="text" size="10" placeholder="Attribut" onChange={this.handleNewAttribut} /></td>
                            </tr>
                            <tr>
                                <td colSpan="6"><input type="submit" value="Ajouter" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </form>
            </div>
        );
    }
}