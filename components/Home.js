import React from 'react'
import { PageHeader, Row, Table } from 'react-bootstrap'

export default () => {
    return (
        <section className="home">

            <PageHeader>Bienvenue sur le site des Elans Loisirs</PageHeader>

            <Row>
                <p>
                    Les Elans loisirs de Champigny est une équipe de hockey sur glace située en région parisienne (Champigny sur Marne) et engagée dans le Trophée Fédéral Loisir.<br /><br />
                    Pour la saison 2016 - 2017 les Elans loisirs sont en Ligue 1 du trophée loisir et ont pour objectif d'atteindre la final nationale pour la première fois de leur histoire.<br /><br />
                    La ligue 1 du Trophée Loisir est composée des équipes suivantes :<br />
                    Meudon, Paris, Champigny, Franconville, Fontenay, Vitry et Evry.
                </p>
            </Row>

            <Row>
                <PageHeader>Dimanche 13 Novembre 18h30</PageHeader>

                <Table condensed>
                    <tr>
                        <td className=""><img src="img/logos/logo-eg.png" className="width100" alt="Les Elans de Champigny" /></td>
                        <td className="">VS</td>
                        <td className=""><img src="img/logos/logo-fontenay.png" className="width100" alt="Les Pumas de Fontenay" /></td>
                    </tr>
                </Table>

                <div className="">
                    <p>
                        La deuxième journée du trophée loisir de nos Elans seront face aux Pumas de Fontenay. Ce sera leur premier match à domicile alors venez nombreux les encourager.
                    </p>
                </div>
            </Row>

            <Row>
                <div className="">
                    <div className="">
                        <h2>Le dernier article de la Gaizette</h2>
                    </div>

                    <div className="">
                        <img src="img/gaizette/equipe.jpg" className="" alt="equipe les elans loisirs" />
                    </div>

                    <div className="">
                        <h2>Fin de saison pour les EGs</h2>
                        <p>
                            Après un exercice 2015/2016 pour le moins compliqué, l’heure est aux premiers bilans du côté des roses et bleus. A cet effet, les dirigeants campinois devraient se réunir prochainement pour identifier les forces et les faiblesses d’une équipe en perdition et de préparer au mieux la saison prochaine. Malgré une nouvelle participation aux playoffs, l’année fut délicate pour […]
                            <a href="http://la-gaizette.fr/fin-de-saison-pour-les-eg/" className="button tiny round" target="_blank">lire l'article</a>
                        </p>
                    </div>
                </div>
            </Row>
        </section>
    );
}