import React from 'react'
import { PageHeader, Row, Col, Table } from 'react-bootstrap'

export default () => {
    return (
        <section>
            <Row>
                <Col xs={12} md={5}>
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
                            <tr>
                                <td>1.</td>
                                <td>Meudon</td>
                                <td>3</td>
                                <td>15</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>+15</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Fontenay</td>
                                <td>1</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>+04</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Vitry</td>
                                <td>1</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>+02</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>F.Volants</td>
                                <td>2</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>-04</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td>Champigny</td>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>-8</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Evry</td>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>-04</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>7.</td>
                                <td>Franconville</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>-03</td>
                                <td>-1</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

                <Col xs={12} md={5} mdOffset={1}>
                    <PageHeader>Calendrier</PageHeader>
                    <Table bordered condensed hover>
                        <tbody>
                        <tr>
                            <td colSpan="2">Match aller</td>
                        </tr>
                        <tr>
                            <td>Dimanche 23 Octobre 20h30</td>
                            <td>Meudon 14 - 6 Champigny</td>
                        </tr>

                        <tr>
                            <td>Dimanche 13 Novembre 18h30</td>
                            <td>Champigny Vs Fontenay</td>
                        </tr>

                        <tr>
                            <td>Dimanche 20 Novembre 18h30</td>
                            <td>Champigny Vs Franconville</td>
                        </tr>

                        <tr>
                            <td>Dimanche 27 Novembre 21h00</td>
                            <td>F.Volants Vs Champigny</td>
                        </tr>

                        <tr>
                            <td>Dimanche 04 Décembre 18h30</td>
                            <td>Champigny Vs Vitry</td>
                        </tr>

                        <tr>
                            <td>Dimanche 18 Décembre 18h15</td>
                            <td>Evry Vs Champigny</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </section>
    );
}