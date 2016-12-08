import React, { Component } from 'react'
import { Row, Col, PageHeader } from 'react-bootstrap'

export default class TopButs extends Component {

    render() {
        return (
            <Row>
                <Col xs={12} md={8} mdOffset={2} className="top5">
                    <PageHeader>Top 5 des meilleurs buteurs</PageHeader>
                    <ul>
                        <li>
                            <div className="topPosition">4ème</div>
                            <div><img src={this.props.buts[3].img} /></div>
                            <div className="topTxt">
                                {this.props.buts[3].prenom}
                                <br />{this.props.buts[3].buts} buts pour {this.props.buts[3].matchs} matchs joués
                                <br />ratio : {((this.props.buts[3].buts) / this.props.buts[3].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">2nd</div>
                            <div><img src={this.props.buts[1].img} /></div>
                            <div className="topTxt">
                                {this.props.buts[1].prenom}
                                <br />{this.props.buts[1].buts} buts pour {this.props.buts[1].matchs} matchs joués
                                <br />ratio : {((this.props.buts[1].buts) / this.props.buts[1].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">1er</div>
                            <div><img src={this.props.buts[0].img} /></div>
                            <div className="topTxt">
                                {this.props.buts[0].prenom}
                                <br />{this.props.buts[0].buts} buts pour {this.props.buts[0].matchs} matchs joués
                                <br />ratio : {((this.props.buts[0].buts) / this.props.buts[0].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">3ème</div>
                            <div><img src={this.props.buts[2].img} /></div>
                            <div className="topTxt">
                                {this.props.buts[2].prenom}
                                <br />{this.props.buts[2].buts} buts pour {this.props.buts[2].matchs} matchs joués
                                <br />ratio : {((this.props.buts[2].buts) / this.props.buts[2].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">5ème</div>
                            <div><img src={this.props.buts[4].img} /></div>
                            <div className="topTxt">
                                {this.props.buts[4].prenom}
                                <br />{this.props.buts[4].buts} buts pour {this.props.buts[4].matchs} matchs joués
                                <br />ratio : {((this.props.buts[4].buts) / this.props.buts[4].matchs).toFixed(2)}
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        );
    }
}