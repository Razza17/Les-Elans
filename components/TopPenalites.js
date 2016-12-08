import React, { Component } from 'react'
import { Row, Col, PageHeader } from 'react-bootstrap'

export default class TopPenalites extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} md={8} mdOffset={2} className="top5">
                    <PageHeader>Top 5 des plus pénalisés</PageHeader>
                    <ul>
                        <li>
                            <div className="topPosition">4ème</div>
                            <div><img src={this.props.penalites[3].img} /></div>
                            <div className="topTxt">
                                {this.props.penalites[3].prenom}
                                <br />{this.props.penalites[3].penalites} minutes de pénalités pour {this.props.penalites[3].matchs} matchs joués
                                <br />ratio : {((this.props.penalites[3].penalites) / this.props.penalites[3].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">2nd</div>
                            <div><img src={this.props.penalites[1].img} /></div>
                            <div className="topTxt">
                                {this.props.penalites[1].prenom}
                                <br />{this.props.penalites[1].penalites} minutes de pénalités pour {this.props.penalites[1].matchs} matchs joués
                                <br />ratio : {((this.props.penalites[1].penalites) / this.props.penalites[1].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">1er</div>
                            <div><img src={this.props.penalites[0].img} /></div>
                            <div className="topTxt">
                                {this.props.penalites[0].prenom}
                                <br />{this.props.penalites[0].penalites} minutes de pénalités pour {this.props.penalites[0].matchs} matchs joués
                                <br />ratio : {((this.props.penalites[0].penalites) / this.props.penalites[0].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">3ème</div>
                            <div><img src={this.props.penalites[2].img} /></div>
                            <div className="topTxt">
                                {this.props.penalites[2].prenom}
                                <br />{this.props.penalites[2].penalites} minutes de pénalités pour {this.props.penalites[2].matchs} matchs joués
                                <br />ratio : {((this.props.penalites[2].penalites) / this.props.penalites[2].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">5ème</div>
                            <div><img src={this.props.penalites[4].img} /></div>
                            <div className="topTxt">
                                {this.props.penalites[4].prenom}
                                <br />{this.props.penalites[4].penalites} minutes de pénalités pour {this.props.penalites[4].matchs} matchs joués
                                <br />ratio : {((this.props.penalites[4].penalites) / this.props.penalites[4].matchs).toFixed(2)}
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        );
    }
}