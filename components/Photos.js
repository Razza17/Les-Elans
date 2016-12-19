import React, { Component } from 'react'
import { Row, Col, PageHeader, Panel, Button } from 'react-bootstrap'

export default class Photos extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open1: false,
            open2: false,
            open3: false,
            open4: false
        };
    }

    render() {
        return (
            <section className="stats">
                <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                        <PageHeader>Photos des Elans G</PageHeader>
                        <Button bsStyle="info" onClick={ ()=> this.setState({ open1: !this.state.open1, open2: false, open3: false, open4: false })}>
                            Saison 2012 - 2013
                        </Button>
                        <Panel collapsible expanded={this.state.open1}>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à domicile</PageHeader>
                                <ul>
                                    <li>
                                        Champigny Vs F.Volants:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Champigny Vs F.Volants.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Fontenay amical:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Fontenay amical.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Fontenay:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Fontenay.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny VS Garges:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Champigny VS Garges.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Meudon:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Meudon.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Saint-Ouen:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Saint-Ouen.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Viry:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Viry.zip">Télécharger</Button>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à l'extérieure</PageHeader>
                                <ul>
                                    <li>
                                        F.Volants Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/F.Volants Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Fontenay Vs Champigny amical:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Fontenay Vs Champigny amical.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Fontenay Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Fontenay Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Garges Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Garges Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Meudon Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Meudon Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        St Ouen Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/St Ouen Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Viry Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2013/Viry Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                </ul>
                            </Col>
                            <Button bsStyle="primary" href="../photo/downloads/saison2013.zip">Télécharger toute la saison (4 Go)</Button>
                        </Panel>
                        <Button bsStyle="info" onClick={ ()=> this.setState({ open2: !this.state.open2, open1: false, open3: false, open4: false })}>
                            Saison 2013 - 2014
                        </Button>
                        <Panel collapsible expanded={this.state.open2}>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à domicile</PageHeader>
                                <ul>
                                    <li>
                                        Champigny Vs Asnières:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Asnieres.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Dammarie:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Dammarie.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Evry:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Evry.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs F.Volants:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Champigny Vs F.Volants.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Franconville:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Franconville.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Troyes:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Troyes.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Viry (Coupe):&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Viry (Coupe).zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Viry:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Viry.zip">Télécharger</Button>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à l'extérieure</PageHeader>
                                <ul>
                                    <li>
                                        Asnières Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Asnieres Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Dammarie Vs Champigny amical:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Dammarie Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Evry Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Evry Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Franconville Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Franconville Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Troyes Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Troyes Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Viry Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2014/Viry Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                </ul>
                            </Col>
                            <Button bsStyle="primary" href="../photo/downloads/saison2014.zip">Télécharger toute la saison</Button>
                        </Panel>
                        <Button bsStyle="info" onClick={ ()=> this.setState({ open3: !this.state.open3, open1: false, open2: false, open4: false })}>
                            Saison 2014 - 2015
                        </Button>
                        <Panel collapsible expanded={this.state.open3}>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à domicile</PageHeader>
                                <ul>
                                    <li>
                                        Champigny Vs Joué-les-Tours:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2015/Champigny Vs Joue-les-tours.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Meudon:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2015/Champigny Vs Meudon.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny Vs Saint-Ouen:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2015/Champigny Vs St-Ouen.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Champigny VS Troyes:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2015/Champigny Vs Troyes.zip">Télécharger</Button>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à l'extérieure</PageHeader>
                                <ul>
                                    <li>
                                        F.Volants Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2015/F.Volants Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Fontenay Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2015/Fontenay Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Joué-les-Tours Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2015/Joue-les-tours Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Meudon Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2015/Meudon Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Neuilly Vs Champigny amicale:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2015/Neuilly Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                    <li>
                                        Saint-Ouen Vs Champigny:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2015/Saint-Ouen Vs Champigny.zip">Télécharger</Button>
                                    </li>
                                </ul>
                            </Col>
                            <Button bsStyle="primary" href="../photo/downloads/saison2015.zip">Télécharger toute la saison</Button>
                        </Panel>
                        <Button bsStyle="info" onClick={ ()=> this.setState({ open4: !this.state.open4, open1: false, open2: false, open3: false })}>
                            Saison 2015 - 2016
                        </Button>
                        <Panel collapsible expanded={this.state.open4}>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à domicile</PageHeader>
                                <ul>
                                    <li>
                                        Champigny Vs Evry:&nbsp;&nbsp;
                                        <Button bsStyle="primary">Voir</Button>&nbsp;&nbsp;
                                        <Button bsStyle="primary" href="../photo/saison2016/Champigny Vs Evry.zip">Télécharger</Button>
                                    </li>
                                </ul>
                            </Col>
                        </Panel>
                    </Col>
                </Row>
            </section>
        );
    }
}