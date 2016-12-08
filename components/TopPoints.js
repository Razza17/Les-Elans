import React, { Component } from 'react'
import { Row, Col, PageHeader } from 'react-bootstrap'

export default class TopPoints extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} md={8} mdOffset={2} className="top5">
                    <PageHeader>Top 5 des meilleurs pointeurs</PageHeader>
                    <ul>
                        <li>
                            <div className="topPosition">4ème</div>
                            <div><img src={this.props.points[3].img} /></div>
                            <div className="topTxt">
                                {this.props.points[3].prenom}
                                <br />{this.props.points[3].points} points pour {this.props.points[3].matchs} matchs joués
                                <br />ratio : {((this.props.points[3].points) / this.props.points[3].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">2nd</div>
                            <div><img src={this.props.points[1].img} /></div>
                            <div className="topTxt">
                                {this.props.points[1].prenom}
                                <br />{this.props.points[1].points} points pour {this.props.points[1].matchs} matchs joués
                                <br />ratio : {((this.props.points[1].points) / this.props.points[1].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">1er</div>
                            <div><img src={this.props.points[0].img} /></div>
                            <div className="topTxt">
                                {this.props.points[0].prenom}
                                <br />{this.props.points[0].points} points pour {this.props.points[0].matchs} matchs joués
                                <br />ratio : {((this.props.points[0].points) / this.props.points[0].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">3ème</div>
                            <div><img src={this.props.points[2].img} /></div>
                            <div className="topTxt">
                                {this.props.points[2].prenom}
                                <br />{this.props.points[2].points} points pour {this.props.points[2].matchs} matchs joués
                                <br />ratio : {((this.props.points[2].points) / this.props.points[2].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">5ème</div>
                            <div><img src={this.props.points[4].img} /></div>
                            <div className="topTxt">
                                {this.props.points[4].prenom}
                                <br />{this.props.points[4].points} points pour {this.props.points[4].matchs} matchs joués
                                <br />ratio : {((this.props.points[4].points) / this.props.points[4].matchs).toFixed(2)}
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        );
    }
}