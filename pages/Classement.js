import React, { Component } from 'react'
import { PageHeader, Row, Col, Table } from 'react-bootstrap'
import ClassementTable from '../components/ClassementTable'
import ClassementTableM from '../components/ClassementTableM'
import Elans from '../data/Elans.json'

export default class Classement extends Component {
    render() {
        function order() {
            function compare(x, y) {
                return x.position - y.position;
            };

            let nombres = Elans.classement;
            nombres.sort(compare);
        }

        order();
        return (
            <section className="classement">
                <Row>
                    <Col xsHidden md={5}>
                        <PageHeader>Classement Trophée Loisir</PageHeader>
                        <Table bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Equipe</th>
                                    <th>Joués</th>
                                    <th>Points</th>
                                    <th>G</th>
                                    <th>N</th>
                                    <th>P</th>
                                    <th>Diff</th>
                                    <th>Malus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Elans.classement.map((classement, i) =>
                                        <ClassementTable
                                            key={i} {...classement}
                                        />
                                    )

                                }
                            </tbody>
                        </Table>
                    </Col>

                    <Col xs={12} smHidden mdHidden lgHidden>
                        <PageHeader>Classement du Trophée Loisir</PageHeader>
                        <Table bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Equipe</th>
                                    <th>Joués</th>
                                    <th>Points</th>
                                    <th>G</th>
                                    <th>N</th>
                                    <th>P</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Elans.classement.map((classement, i) =>
                                        <ClassementTableM
                                            key={i} {...classement}
                                        />
                                    )

                                }
                            </tbody>
                        </Table>
                    </Col>

                    <Col xs={12} md={5} mdOffset={1}>
                        <PageHeader>Calendrier</PageHeader>
                        <Table bordered condensed hover>
                            <thead>
                                <tr>
                                    <th colSpan="2">Match aller</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dimanche 23 Octobre 20h30</td>
                                    <td>Meudon 14 - 6 Champigny</td>
                                </tr>

                                <tr>
                                    <td>Dimanche 13 Novembre 18h30</td>
                                    <td>Champigny 3 - 3 Fontenay</td>
                                </tr>

                                <tr>
                                    <td>Dimanche 20 Novembre 18h30</td>
                                    <td>Champigny 4 - 6 Franconville</td>
                                </tr>

                                <tr>
                                    <td>Dimanche 27 Novembre 21h00</td>
                                    <td>F.Volants 7 - 3 Champigny</td>
                                </tr>

                                <tr>
                                    <td>Dimanche 04 Décembre 18h30</td>
                                    <td>Champigny 4 - 7 Vitry</td>
                                </tr>

                                <tr>
                                    <td>Match reporté</td>
                                    <td>Evry Vs Champigny</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </section>
        );
    }
}