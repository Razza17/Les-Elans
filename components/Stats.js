import React, { Component } from 'react'
import { Row, Col, PageHeader, Table } from 'react-bootstrap'
import StatsTable from './StatsTable'
import Elans from '../data/Elans.json'

export default class Stats extends Component {
    render() {
        function order() {
            function compare(x,y) {
                return (y.buts + y.assistes) - (x.buts + x.assistes);
            };

            let nombres = Elans.stats;
            nombres.sort(compare);
        }
        order();
        return (
            <section className="stats">
                <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                        <PageHeader>Statistiques des Elans G</PageHeader>
                        <Table bordered condensed hover>
                            <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Buts</th>
                                <th>Assistes</th>
                                <th>Points</th>
                                <th>Pénalités (en min)</th>
                                <th>Matchs joués</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    Elans.stats.map((stats, i) =>
                                        <StatsTable
                                            key={i} {...stats}
                                        />
                                    )

                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </section>
        );
    }
}