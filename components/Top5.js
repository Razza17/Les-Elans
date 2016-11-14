import React, { Component } from 'react'
import { Row, Col, PageHeader } from 'react-bootstrap'
import Elans from '../data/Elans.json'

export default class Top5 extends Component {
    topButs() {
        function compare(x,y) {
            return y.buts - x.buts;
        }
        let buts = Elans.stats;
        buts.sort(compare);
        return buts;
    }

    topAssist() {
        function compare(x,y) {
            return y.assistes - x.assistes;
        }
        let assistes = Elans.stats;
        assistes.sort(compare);
        return assistes;
    }

    topPoints() {
        function compare(x,y) {
            return y.buts + y.assistes - x.buts + x.assistes;
        }
        let points = Elans.stats;
        points.sort(compare);
        return points;
    }

    topPenalite() {
        function compare(x,y) {
            return y.penalites - x.penalites;
        }
        let penalite = Elans.stats;
        penalite.sort(compare);
        return penalite;
    }
    render() {

        const pointeur = this.topPoints();

        return (
            <section>
                <Row>
                    <Col xs={12} md={8} mdOffset={2} className="top5">
                        <PageHeader>Top 5 des meilleurs buteurs</PageHeader>
                        <ul>
                            <li>
                                <div className="topPosition">4ème</div>
                                <div><img src={this.topButs()[3].img} /></div>
                                <div className="topTxt">
                                    {this.topButs()[3].prenom}
                                    <br />{this.topButs()[3].buts} buts pour {this.topButs()[3].matchs} matchs joués
                                    <br />ratio : {(this.topButs()[3].buts / this.topButs()[3].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">2nd</div>
                                <div><img src={this.topButs()[1].img} /></div>
                                <div className="topTxt">
                                    {this.topButs()[1].prenom}
                                    <br />{this.topButs()[1].buts} buts pour {this.topButs()[1].matchs} matchs joués
                                    <br />ratio : {(this.topButs()[1].buts / this.topButs()[1].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">1er</div>
                                <div><img src={this.topButs()[0].img} /></div>
                                <div className="topTxt">
                                    {this.topButs()[0].prenom}
                                    <br />{this.topButs()[0].buts} buts pour {this.topButs()[0].matchs} matchs joués
                                    <br />ratio : {(this.topButs()[0].buts / this.topButs()[0].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">3ème</div>
                                <div><img src={this.topButs()[2].img} /></div>
                                <div className="topTxt">
                                    {this.topButs()[2].prenom}
                                    <br />{this.topButs()[2].buts} buts pour {this.topButs()[2].matchs} matchs joués
                                    <br />ratio : {(this.topButs()[2].buts / this.topButs()[2].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">5ème</div>
                                <div><img src={this.topButs()[4].img} /></div>
                                <div className="topTxt">
                                    {this.topButs()[4].prenom}
                                    <br />{this.topButs()[4].buts} buts pour {this.topButs()[4].matchs} matchs joués
                                    <br />ratio : {(this.topButs()[4].buts / this.topButs()[4].matchs).toFixed(2)}
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} mdOffset={2} className="top5">
                        <PageHeader>Top 5 des meilleurs assistes</PageHeader>
                        <ul>
                            <li>
                                <div className="topPosition">4ème</div>
                                <div><img src={this.topAssist()[3].img} /></div>
                                <div className="topTxt">
                                    {this.topAssist()[3].prenom}
                                    <br />{this.topAssist()[3].assistes} assistes pour {this.topAssist()[3].matchs} matchs joués
                                    <br />ratio : {(this.topAssist()[3].assistes / this.topAssist()[3].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">2nd</div>
                                <div><img src={this.topAssist()[1].img} /></div>
                                <div className="topTxt">
                                    {this.topAssist()[1].prenom}
                                    <br />{this.topAssist()[1].assistes} assistes pour {this.topAssist()[1].matchs} matchs joués
                                    <br />ratio : {(this.topAssist()[1].assistes / this.topAssist()[1].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">1er</div>
                                <div><img src={this.topAssist()[0].img} /></div>
                                <div className="topTxt">
                                    {this.topAssist()[0].prenom}
                                    <br />{this.topAssist()[0].assistes} assistes pour {this.topAssist()[0].matchs} matchs joués
                                    <br />ratio : {(this.topAssist()[0].assistes / this.topAssist()[0].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">3ème</div>
                                <div><img src={this.topAssist()[2].img} /></div>
                                <div className="topTxt">
                                    {this.topAssist()[2].prenom}
                                    <br />{this.topAssist()[2].assistes} assistes pour {this.topAssist()[2].matchs} matchs joués
                                    <br />ratio : {(this.topAssist()[2].assistes / this.topAssist()[2].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">5ème</div>
                                <div><img src={this.topAssist()[4].img} /></div>
                                <div className="topTxt">
                                    {this.topAssist()[4].prenom}
                                    <br />{this.topAssist()[4].assistes} assistes pour {this.topAssist()[4].matchs} matchs joués
                                    <br />ratio : {(this.topAssist()[4].assistes / this.topAssist()[4].matchs).toFixed(2)}
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} mdOffset={2} className="top5">
                        <PageHeader>Top 5 des meilleurs pointeurs</PageHeader>
                        <ul>
                            <li>
                                <div className="topPosition">4ème</div>
                                <div><img src={pointeur[3].img} /></div>
                                <div className="topTxt">
                                    {pointeur[3].prenom}
                                    <br />{pointeur[3].buts + pointeur[3].assistes} points pour {pointeur[3].matchs} matchs joués
                                    <br />ratio : {((pointeur[3].buts + pointeur[3].assistes) / pointeur[3].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">2nd</div>
                                <div><img src={pointeur[1].img} /></div>
                                <div className="topTxt">
                                    {pointeur[1].prenom}
                                    <br />{pointeur[1].buts + pointeur[1].assistes} points pour {pointeur[1].matchs} matchs joués
                                    <br />ratio : {((pointeur[1].buts + pointeur[1].assistes) / pointeur[1].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">1er</div>
                                <div><img src={pointeur[0].img} /></div>
                                <div className="topTxt">
                                    {pointeur[0].prenom}
                                    <br />{pointeur[0].buts + pointeur[0].assistes} points pour {pointeur[0].matchs} matchs joués
                                    <br />ratio : {((pointeur[0].buts + pointeur[0].assistes) / pointeur[0].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">3ème</div>
                                <div><img src={pointeur[2].img} /></div>
                                <div className="topTxt">
                                    {pointeur[2].prenom}
                                    <br />{pointeur[2].buts + pointeur[2].assistes} points pour {pointeur[2].matchs} matchs joués
                                    <br />ratio : {((pointeur[2].buts + pointeur[2].assistes) / pointeur[2].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">5ème</div>
                                <div><img src={pointeur[4].img} /></div>
                                <div className="topTxt">
                                    {pointeur[4].prenom}
                                    <br />{pointeur[4].buts + pointeur[4].assistes} points pour {pointeur[4].matchs} matchs joués
                                    <br />ratio : {((pointeur[4].buts + pointeur[4].assistes) / pointeur[4].matchs).toFixed(2)}
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} mdOffset={2} className="top5">
                        <PageHeader>Top 5 des plus pénalisés</PageHeader>
                        <ul>
                            <li>
                                <div className="topPosition">4ème</div>
                                <div><img src={this.topPenalite()[3].img} /></div>
                                <div className="topTxt">
                                    {this.topPenalite()[3].prenom}
                                    <br />{this.topPenalite()[3].penalites} minutes de pénalités pour {this.topPenalite()[3].matchs} matchs joués
                                    <br />ratio : {(this.topPenalite()[3].penalites / this.topPenalite()[3].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">2nd</div>
                                <div><img src={this.topPenalite()[1].img} /></div>
                                <div className="topTxt">
                                    {this.topPenalite()[1].prenom}
                                    <br />{this.topPenalite()[1].penalites} minutes de pénalités pour {this.topPenalite()[1].matchs} matchs joués
                                    <br />ratio : {(this.topPenalite()[1].penalites / this.topPenalite()[1].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">1er</div>
                                <div><img src={this.topPenalite()[0].img} /></div>
                                <div className="topTxt">
                                    {this.topPenalite()[0].prenom}
                                    <br />{this.topPenalite()[0].penalites} minutes de pénalités pour {this.topPenalite()[0].matchs} matchs joués
                                    <br />ratio : {(this.topPenalite()[0].penalites / this.topPenalite()[0].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">3ème</div>
                                <div><img src={this.topPenalite()[2].img} /></div>
                                <div className="topTxt">
                                    {this.topPenalite()[2].prenom}
                                    <br />{this.topPenalite()[2].penalites} minutes de pénalités pour {this.topPenalite()[2].matchs} matchs joués
                                    <br />ratio : {(this.topPenalite()[2].penalites / this.topPenalite()[2].matchs).toFixed(2)}
                                </div>
                            </li>
                            <li>
                                <div className="topPosition">5ème</div>
                                <div><img src={this.topPenalite()[4].img} /></div>
                                <div className="topTxt">
                                    {this.topPenalite()[4].prenom}
                                    <br />{this.topPenalite()[4].penalites} minutes de pénalités pour {this.topPenalite()[4].matchs} matchs joués
                                    <br />ratio : {(this.topPenalite()[4].penalites / this.topPenalite()[4].matchs).toFixed(2)}
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </section>
        );
    }
}