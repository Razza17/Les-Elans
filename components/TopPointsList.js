import React, { Component } from 'react'
import { Row, Col, PageHeader } from 'react-bootstrap'
import Elans from '../data/Elans.json'

export default class TopPointsList extends Component {
    render() {

        function topPoints() {

            function compare(x,y) {
                return y["points"] - x["points"];
            }

            let point = Elans.stats;
            point.sort(compare);

            return point;
        }

        let prenom1 = topPoints()[0].prenom;
        let prenom2 = topPoints()[1].prenom;
        let prenom3 = topPoints()[2].prenom;
        let prenom4 = topPoints()[3].prenom;
        let prenom5 = topPoints()[4].prenom;

        let img1 = topPoints()[0].img;
        let img2 = topPoints()[1].img;
        let img3 = topPoints()[2].img;
        let img4 = topPoints()[3].img;
        let img5 = topPoints()[4].img;

        return (
            <Row>
                <Col xs={12} md={8} mdOffset={2} className="top5">
                    <PageHeader>Top 5 des meilleurs pointeurs</PageHeader>
                    <ul>
                        <li>
                            <div className="topPosition">4ème</div>
                            <div><img src={img3} /></div>
                            <div className="topTxt">
                                {prenom4}
                                <br />{topPoints()[3].points} points pour {topPoints()[3].matchs} matchs joués
                                <br />ratio : {((topPoints()[3].points) / topPoints()[3].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">2nd</div>
                            <div><img src={img4} /></div>
                            <div className="topTxt">
                                {prenom2}
                                <br />{topPoints()[1].points} points pour {topPoints()[1].matchs} matchs joués
                                <br />ratio : {((topPoints()[1].points) / topPoints()[1].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">1er</div>
                            <div><img src={img1} /></div>
                            <div className="topTxt">
                                {prenom1}
                                <br />{topPoints()[0].points} points pour {topPoints()[0].matchs} matchs joués
                                <br />ratio : {((topPoints()[0].points) / topPoints()[0].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">3ème</div>
                            <div><img src={img2} /></div>
                            <div className="topTxt">
                                {prenom3}
                                <br />{topPoints()[2].points} points pour {topPoints()[2].matchs} matchs joués
                                <br />ratio : {((topPoints()[2].points) / topPoints()[2].matchs).toFixed(2)}
                            </div>
                        </li>
                        <li>
                            <div className="topPosition">5ème</div>
                            <div><img src={img5} /></div>
                            <div className="topTxt">
                                {prenom5}
                                <br />{topPoints()[4].points} points pour {topPoints()[4].matchs} matchs joués
                                <br />ratio : {((topPoints()[4].points) / topPoints()[4].matchs).toFixed(2)}
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        );
    }
}