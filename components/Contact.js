import React from 'react'
import { Row, Col, PageHeader } from 'react-bootstrap'

export default () => {
    return (
        <section>
            <Row>
                <Col xs={12} md={3} mdOffset={1}>
                    <PageHeader>Où nous trouver ?</PageHeader>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.1050964936053!2d2.5081806676264553!3d48.81805616376097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60dae1eebe03b%3A0x69c5c53b89729fe3!2sPatinoire+de+Champigny-sur-Marne!5e0!3m2!1sfr!2sfr!4v1479728980193" width="100%" height="430" frameborder="0" allowfullscreen></iframe>
                </Col>
                <Col xs={12} md={3} mdOffset={1}>
                    <PageHeader>Sur les réseaux</PageHeader>
                    <ul className="social">
                        <li>
                            <img src="../img/contact/fb_icon.png" />
                            <a href="https://www.facebook.com/leselansloisir/" target="_blank">Sur Facebook</a>
                        </li>
                        <li>
                            <img src="../img/contact/twitter_icon.png" />
                            <a href="https://twitter.com/egofficiel" target="_blank">Sur Twitter</a> #WeArePinkPlayers
                        </li>
                        <li>
                            <img src="../img/contact/email_icon.png" />
                            Par email : <a href="mailto:elansloisir@gmail.com">elansloisir@gmail.com</a>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} md={3} mdOffset={1} className="glace">
                    <PageHeader>Sur la glace</PageHeader>
                    <p>
                        Les entrainements sont les lundi et mercredi de<br />
                        22h45 à minuit<br />(hors vacances scolaires)
                    </p>
                    <p>
                        Les inscriptions sont closes pour la saison 2016-2017
                    </p>
                </Col>
            </Row>
        </section>
    );
}