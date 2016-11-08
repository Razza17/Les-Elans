import React, { Component } from 'react'
import { Row, Col, PageHeader } from 'react-bootstrap'
import Elans from '../data/Elans.json'

export default class Top5 extends Component {
    render() {
        function order() {
            function compare(x,y) {
                return y.points - x.points;
            };

            let nombres = Elans.stats;
            nombres.sort(compare);
        }
        order();
        return (
            <section className="top5">
                <Row>
                    <Col xsHidden md={6} mdOffset={3}>
                        <PageHeader>Top 5 des Elans G</PageHeader>
                        <ul>
                            <li>
                                <div className="topPosition">4ème</div>
                                <div><img src='' /></div>
                                <div className="topTxt"></div>
                            </li>
                            <li>
                                <div className="topPosition">2nd</div>
                                <div><img src='' /></div>
                                <div className="topTxt"></div>
                            </li>
                            <li>
                                <div className="topPosition">1er</div>
                                <div><img src='' /></div>
                                <div className="topTxt"></div>
                            </li>
                            <li>
                                <div className="topPosition">3ème</div>
                                <div><img src='' /></div>
                                <div className="topTxt"></div>
                            </li>
                            <li>
                                <div className="topPosition">5ème</div>
                                <div><img src='' /></div>
                                <div className="topTxt"></div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </section>
        );
    }
}