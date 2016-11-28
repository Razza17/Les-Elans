import React from 'react'
import { PageHeader, Row, Col, Image, Button, Carousel, Table } from 'react-bootstrap'

export default () => {
    return (
        <Row>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Image src="../img/une/une1.jpg" />
                        <Carousel.Caption>
                            <h3>3ème défaite en 4 matchs pour les roses et bleus</h3>
                            <p>Les ELans tombent, encore une fois le week end dernier, 7-3 contre les Français Volants</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="../img/une/une2.jpg" />
                        <Carousel.Caption>
                            <h3>Dimanche 04 Décembre 18h30</h3>
                            <p>Venez nombreux supporter les roses et bleus pour leur quête de leur première victoire.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="../img/une/une3.jpg" />
                        <Carousel.Caption>
                            <h3>Le retour en D3</h3>
                            <p>Landry Labat, attendu cette année avec nos Elans G, a finalement signé pour une année de plus en D3.</p>
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
                    <Col xsHidden sm={12} className="photo">
                        <PageHeader>Les photos en téléchargement</PageHeader>
                        <ul>
                            <li><Button bsStyle="primary" href="../photo/downloads/saison2013.zip">Saison 2012 - 2013 (4 Go)</Button></li>
                            <li><Button bsStyle="primary" href="../photo/downloads/saison2014.zip">Saison 2013 - 2014</Button></li>
                            <li><Button bsStyle="primary" href="../photo/downloads/saison2015.zip">Saison 2014 - 2015</Button></li>
                            <li><Button bsStyle="primary" href="../photo/downloads/saison2015.zip">Saison 2015 - 2016</Button></li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={5}>
                        <PageHeader>Dimanche 04 Décembre 18h30</PageHeader>
                        <Row className="rencontre">
                            <Col xs={12} md={8} mdOffset={2} smOffset={3}>
                                <Table responsive>
                                    <tr>
                                        <td><img src="img/logos/logo-eg.png" alt="Les Elans de Champigny" /></td>
                                        <td>VS</td>
                                        <td><img src="img/logos/logo-vitry.png" alt="Les Vikings de Vitry" /></td>
                                    </tr>
                                </Table>
                            </Col>
                        </Row>

                        <Row>
                            <p>
                                Avant dernière journée des matchs allé pour nos EG, toujours en quête de leur première victoire dans le championnat.
                                Venez nombreux les encourager à Champigny le dimanche 04 Décembre à 18h30 !
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