import React from 'react'

export default () => {
    return (
        <section className="content">

            <div className="page-header medium-10 medium-offset-1 columns">
                <h1>Bienvenue sur le site des Elans loisirs</h1>
            </div>

            <div className="row">
                <div className="post medium-10 medium-offset-1 columns">
                    <p>
                        Les Elans loisirs de Champigny est une équipe de hockey sur glace située en région parisienne (Champigny sur Marne) et engagée dans le Trophée Fédéral Loisir.<br /><br />
                        Pour la saison 2016 - 2017 les Elans loisirs sont en Ligue 1 du trophée loisir et ont pour objectif d'atteindre la final nationale pour la première fois de leur histoire.<br /><br />
                        La ligue 1 du Trophée Loisir est composée des équipes suivantes :<br />
                        Meudon, Paris, Champigny, Franconville, Fontenay, Vitry et Evry.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="post medium-6 columns">
                    <div className="page-header">
                        <h3>Dimanche 13 Novembre 18h30</h3>
                    </div>

                    <table className="medium-12">
                        <tr>
                            <td className="medium-4"><img src="img/logos/logo-eg.png" className="width100" alt="Les Elans de Champigny" /></td>
                            <td className="medium-1">VS</td>
                            <td className="medium-4"><img src="img/logos/logo-fontenay.png" className="width100" alt="Les Pumas de Fontenay" /></td>
                        </tr>
                    </table>

                    <div className="medium-12">
                        <p>
                            La deuxième journée du trophée loisir de nos Elans seront face aux Pumas de Fontenay. Ce sera leur premier match à domicile alors venez nombreux les encourager.
                        </p>
                    </div>
                </div>
                <div className="banner_img visible-for-medium-up medium-6 columns" data-bottom-top="left:100%;opacity:0;" data-center="left:0;opacity:1;">
                    <img src="img/banner_img2.jpg" alt="banner_image" />
                </div>
            </div>

            <div className="row">
                <div className="medium-12">
                    <div className="page-header columns">
                        <h2>Le dernier article de la Gaizette</h2>
                    </div>

                    <div className="medium-6 columns">
                        <img src="img/gaizette/equipe.jpg" className="width100 relative" alt="equipe les elans loisirs" data-bottom-top="transform:scale(1);" data-center="transform:scale(1.08);" />
                    </div>

                    <div className="post medium-6 columns">
                        <h2>Fin de saison pour les EGs</h2>
                        <p>
                            Après un exercice 2015/2016 pour le moins compliqué, l’heure est aux premiers bilans du côté des roses et bleus. A cet effet, les dirigeants campinois devraient se réunir prochainement pour identifier les forces et les faiblesses d’une équipe en perdition et de préparer au mieux la saison prochaine. Malgré une nouvelle participation aux playoffs, l’année fut délicate pour […]
                            <a href="http://la-gaizette.fr/fin-de-saison-pour-les-eg/" className="button tiny round" target="_blank">lire l'article</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}