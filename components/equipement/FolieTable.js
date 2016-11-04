import React, { Component } from 'react'
import fs from 'fs'
import { Table, Button } from 'react-bootstrap'
import Wolfgang from '../../data/Wolfgang.json'
import Folie from './Folie'

export default class FolieTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nom: '',
            folie: Wolfgang.folie
        }
    };

    newFolie(e) {
        this.setState({nom: e.target.value});
    };

    updateFolie(e) {
        e.preventDefault();

        const {folie, nom} = this.state;

        folie.push({nom:nom});
        this.setState({folie: folie});
    }

    render() {

        const {folie} = this.state;

        return (
            <div className="col-xs-12">
                <form className="folieForm" onSubmit={this.updateFolie.bind(this)}>
                    <Table condesed hover className="moneyTable">
                        <thead>
                            <tr className="text-uppercase">
                                <th className="text-center">Folies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                folie.map((folie, i) =>
                                    <Folie key={i} {...folie} />
                                )
                            }
                            <tr>
                                <td>
                                    <input type="text" placeholder="Inscrire ta folie" onChange={this.newFolie.bind(this)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Ajouter" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </form>
            </div>
        );
    }
}