import React from 'react'
import { PageHeader, Row, Table, Col, Image } from 'react-bootstrap'

export default () => {
    return (
        <section>
            <Row>
                <PageHeader>Bienvenue sur le site des Elans Loisirs</PageHeader>
                <p>
                    Les Elans loisirs de Champigny est une équipe de hockey sur glace située en région parisienne (Champigny sur Marne) et engagée dans le Trophée Fédéral Loisir.<br /><br />
                    Pour la saison 2016 - 2017 les Elans loisirs sont en Ligue 1 du trophée loisir et ont pour objectif d'atteindre la final nationale pour la première fois de leur histoire.<br /><br />
                    La ligue 1 du Trophée Loisir est composée des équipes suivantes :<br />
                    Meudon, Paris, Champigny, Franconville, Fontenay, Vitry et Evry.
                </p>
            </Row>

            <Row>
                <Col xs={12} md={6}>
                    <PageHeader>Dimanche 13 Novembre 18h30</PageHeader>
                    <Row className="rencontre">
                        <Col xs={5}>
                            <Image src="img/logos/logo-eg.png" alt="Les Elans de Champigny" responsive />
                        </Col>
                        <Col className="vs" xs={2}>
                            VS
                        </Col>
                        <Col xs={5}>
                            <Image src="img/logos/logo-fontenay.png" alt="Les Pumas de Fontenay" responsive />
                        </Col>
                    </Row>

                    <Row>
                        <p>
                            La deuxième journée du trophée loisir de nos Elans seront face aux Pumas de Fontenay. Ce sera leur premier match à domicile alors venez nombreux les encourager.
                        </p>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <PageHeader>Le dernier article de la Gaizette</PageHeader>

                    <div className="">
                        <Image src="img/gaizette/equipe.jpg" alt="equipe les elans loisirs" responsive />
                    </div>

                    <Row>
                        <h2>Fin de saison pour les EGs</h2>
                        <p>
                            Après un exercice 2015/2016 pour le moins compliqué, l’heure est aux premiers bilans du côté des roses et bleus. A cet effet, les dirigeants campinois devraient se réunir prochainement pour identifier les forces et les faiblesses d’une équipe en perdition et de préparer au mieux la saison prochaine. Malgré une nouvelle participation aux playoffs, l’année fut délicate pour […]
                            <br />
                            <a href="http://la-gaizette.fr/fin-de-saison-pour-les-eg/" className="button tiny round" target="_blank">lire l'article</a>
                        </p>
                    </Row>
                </Col>
            </Row>
        </section>
    );
}