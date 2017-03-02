import React from 'react'
import { PageHeader, Row, Col, Image, Button, Carousel, Table } from 'react-bootstrap'

export default () => {
    return (
        <Row>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Image src="../img/une/une1.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="../img/une/une3.jpg" />
                        <Carousel.Caption>
                            <h3>Dimanche 05 Mars 18h00</h3>
                            <p>Après leur première victoire en championnat, les EGs se déplacent à Evry.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="../img/une/une2.jpg" />
                        <Carousel.Caption>
                            <h3>LA première victoire de la saison</h3>
                            <p>Dimanche dernier nos EGs sont sorti victorieux de leur rencontre face aux Vikings de Vitry (9-7)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <section className="home">
                <Row>
                    <PageHeader>Bienvenue sur le site des Elans Loisirs</PageHeader>
                    <p>
                        Les Elans loisirs de Champigny est une équipe de hockey sur glace située en région parisienne (Champigny sur Marne) et engagée dans le Trophée Fédéral Loisir.<br /><br />
                        Pour la saison 2016 - 2017 les Elans loisirs sont en Ligue 1 du trophée loisir et ont pour objectif d'atteindre la finale nationale pour la première fois de leur histoire.<br /><br />
                        La ligue 1 du Trophée Loisir est composée des équipes suivantes :<br />
                        Meudon, Paris, Champigny, Franconville, Fontenay, Vitry et Evry.
                    </p>
                </Row>

                <Row>
                    <Col xs={12} md={5}>
                        <PageHeader>Dimanche 05 Mars 18h</PageHeader>
                        <Row className="rencontre">
                            <Col xs={12} md={8} mdOffset={2}>
                                <Table responsive>
                                    <tr>
                                        <td><img src="img/logos/logo-evry-viry.png" alt="Evry-Viry" /></td>
                                        <td>VS</td>
                                        <td><img src="img/logos/logo-eg.png" alt="Les Elans de Champigny" /></td>
                                    </tr>
                                </Table>
                            </Col>
                        </Row>

                        <Row>
                            <p>
                                La deuxième partie de saison démarre bien pour nos EGs avec une victoire (9-7) face à vitry.
                                Il reste à confirmer face à Evry ce week end.
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} md={5} mdOffset={1}>
                        <PageHeader>Le dernier article de la Gaizette</PageHeader>

                        <div>
                            <Image src="../img/gaizette/equipe2016.jpg" alt="equipe les elans loisirs" responsive />
                        </div>

                        <Row>
                            <h2>Fin de saison pour les EGs</h2>
                            <p>
                                Après un exercice 2015/2016 pour le moins compliqué, l’heure est aux premiers bilans du côté des roses et bleus. A cet effet, les dirigeants campinois devraient se réunir prochainement pour identifier les forces et les faiblesses d’une équipe en perdition et de préparer au mieux la saison prochaine. Malgré une nouvelle participation aux playoffs, l’année fut délicate pour […]
                                <br /><br />
                                <Button bsStyle="info" bsSize="small" href="http://la-gaizette.fr/fin-de-saison-pour-les-eg/" target="_blank">Lire l'article</Button>
                            </p>
                        </Row>
                    </Col>
                </Row>
            </section>
        </Row>
    );
}