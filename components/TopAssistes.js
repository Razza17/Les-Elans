import React, { Component } from 'react'
import { Row, Col, PageHeader } from 'react-bootstrap'

export default class TopAssistes extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} md={8} mdOffset={2} className="top5">
                    <PageHeader>Top 5 des meilleurs assistes</PageHeader>
                    <ul>
                        <li>
                            <div className="topPosition">4ème</div>
                            <div><img src={this.props.assistes[3].img} /></div>
                            <div className="topTxt">
                                {this.props.assistes[3].prenom}
                                <br />{this.props.assistes[3].assistes} assistes pour {this.props.assistes[3].matchs} matchs joués
                                <br />ratio : {((this.props.assistes[3].assistes) / this.props.assistes[3].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">2nd</div>
                            <div><img src={this.props.assistes[1].img} /></div>
                            <div className="topTxt">
                                {this.props.assistes[1].prenom}
                                <br />{this.props.assistes[1].assistes} assistes pour {this.props.assistes[1].matchs} matchs joués
                                <br />ratio : {((this.props.assistes[1].assistes) / this.props.assistes[1].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">1er</div>
                            <div><img src={this.props.assistes[0].img} /></div>
                            <div className="topTxt">
                                {this.props.assistes[0].prenom}
                                <br />{this.props.assistes[0].assistes} assistes pour {this.props.assistes[0].matchs} matchs joués
                                <br />ratio : {((this.props.assistes[0].assistes) / this.props.assistes[0].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">3ème</div>
                            <div><img src={this.props.assistes[2].img} /></div>
                            <div className="topTxt">
                                {this.props.assistes[2].prenom}
                                <br />{this.props.assistes[2].assistes} assistes pour {this.props.assistes[2].matchs} matchs joués
                                <br />ratio : {((this.props.assistes[2].assistes) / this.props.assistes[2].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">5ème</div>
                            <div><img src={this.props.assistes[4].img} /></div>
                            <div className="topTxt">
                                {this.props.assistes[4].prenom}
                                <br />{this.props.assistes[4].assistes} assistes pour {this.props.assistes[4].matchs} matchs joués
                                <br />ratio : {((this.props.assistes[4].assistes) / this.props.assistes[4].matchs).toFixed(2)}
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        );
    }
}