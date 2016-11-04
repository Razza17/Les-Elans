import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class ResumeArmeTable extends Component {

    render() {
        return (
            <div className="col-xs-12">
                <Table condesed hover>
                    <thead>
                        <tr className="text-uppercase">
                            <th className="text-center">parties</th>
                            <th className="text-center">pts d'armure</th>
                            <th className="text-center">pts d'armure + be</th>
                            <th className="text-center">dés</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td>Tête</td>
                            <td>{this.props.ptsTete}</td>
                            <td>{this.props.ptsTete + this.props.be}</td>
                            <td>01 - 15</td>
                        </tr>
                        <tr className="text-center">
                            <td>Bras droit</td>
                            <td>{this.props.ptsBras + this.props.ptsTorse}</td>
                            <td>{this.props.ptsBras + this.props.ptsTorse + this.props.be}</td>
                            <td>16 - 35</td>
                        </tr>
                        <tr className="text-center">
                            <td>Bras gauche</td>
                            <td>{this.props.ptsBras + this.props.ptsTorse}</td>
                            <td>{this.props.ptsBras + this.props.ptsTorse + this.props.be}</td>
                            <td>36 - 55</td>
                        </tr>
                        <tr className="text-center">
                            <td>Corps</td>
                            <td>{this.props.ptsCorps + this.props.ptsTorse}</td>
                            <td>{this.props.ptsCorps + this.props.ptsTorse + this.props.be}</td>
                            <td>56 - 80</td>
                        </tr>
                        <tr className="text-center">
                            <td>Jambes droite</td>
                            <td>{this.props.ptsJambes}</td>
                            <td>{this.props.ptsJambes + this.props.be}</td>
                            <td>81 - 90</td>
                        </tr>
                        <tr className="text-center">
                            <td>Jambes gauche</td>
                            <td>{this.props.ptsJambes}</td>
                            <td>{this.props.ptsJambes + this.props.be}</td>
                            <td>91 - 00</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}