import React, { Component } from 'react';
import Armure from './Armure';
import { Table, Button } from 'react-bootstrap';
import Wolfgang from '../../data/Wolfgang.json';


export default class ArmeTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom: '',
            encombrement: '',
            couverture: '',
            points: '',
            armure: Wolfgang.armure
        };

        this.updateState = this.updateState.bind(this);
        this.handleNewName = this.handleNewName.bind(this);
        this.handleNewEncombrement = this.handleNewEncombrement.bind(this);
        this.handleNewCouverture = this.handleNewCouverture.bind(this);
        this.handleNewPoints = this.handleNewPoints.bind(this);

    };

    handleNewName(e) {
        this.setState({nom: e.target.value});
    }

    handleNewEncombrement(e) {
        this.setState({encombrement: e.target.value});
    }

    handleNewCouverture(e) {
        this.setState({couverture: e.target.value});
    }

    handleNewPoints(e) {
        this.setState({points: e.target.value});
    }

    updateState(e) {

        const {armure, nom, encombrement, couverture, points} = this.state;
        e.preventDefault();

        armure.push({nom:nom, encombrement:encombrement, couverture:couverture, points:points});
        this.setState({armure: armure});

    }

    render() {

        const {armure} = this.state;

        return (
            <div className="col-xs-12">
                <form className="commentForm" onSubmit={this.updateState}>
                    <Table condensed hover className="text-center">
                        <thead>
                            <tr>
                                <th className="text-center">Armures</th>
                                <th className="text-center">Enc.</th>
                                <th className="text-center">Paties couvertes</th>
                                <th className="text-center">Points d'armure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                armure.map((armure, i) =>
                                    <Armure key={i} {...armure} />
                                )
                            }
                            <tr>
                                <td><input type="text" placeholder="Amure" onChange={this.handleNewName} /></td>
                                <td><input type="text" placeholder="Encombrement" onChange={this.handleNewEncombrement} /></td>
                                <td>
                                    <select onChange={this.handleNewCouverture}>
                                        <option>Couverture</option>
                                        <option value="Tête">Tête</option>
                                        <option value="Bras">Bras</option>
                                        <option value="Corps">Corps</option>
                                        <option value="Corps + Bras">Corps + Bras</option>
                                        <option value="Jambes">Jambes</option>
                                    </select>
                                </td>
                                <td><input type="text" placeholder="Points" onChange={this.handleNewPoints} /></td>
                            </tr>
                            <tr>
                                <td colSpan="4"><input type="submit" value="Ajouter" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </form>
            </div>
        );
    }
}