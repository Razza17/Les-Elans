import React, { Component } from 'react'
import { Row, Col, PageHeader, Panel, Button, Table } from 'react-bootstrap'
import DomicileVolants from '../components/saison13/DomicileVolants'
import DomicileFontenayA from '../components/saison13/DomicileFontenayA'
import DomicileFontenay from '../components/saison13/DomicileFontenay'
import DomicileGarges from '../components/saison13/DomicileGarges'
import DomicileMeudon from '../components/saison13/DomicileMeudon'
import DomicileStouen from '../components/saison13/DomicileStouen'
import DomicileViry from '../components/saison13/DomicileViry'
import ExterieurVolants from '../components/saison13/ExterieurVolants'
import ExterieurFontenayA from '../components/saison13/ExterieurFontenayA'
import ExterieurFontenay from '../components/saison13/ExterieurFontenay'
import ExterieurGarges from '../components/saison13/ExterieurGarges'
import ExterieurMeudon from '../components/saison13/ExterieurMeudon'
import ExterieurStouen from '../components/saison13/ExterieurStouen'
import ExterieurViry from '../components/saison13/ExterieurViry'

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
            <section className="photos">
                <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                        <PageHeader>Photos des Elans G</PageHeader>
                        <Button bsStyle="info" onClick={ ()=> this.setState({ open1: !this.state.open1, open2: false, open3: false, open4: false })}>
                            Saison 2012 - 2013
                        </Button>
                        <Panel collapsible expanded={this.state.open1}>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à domicile</PageHeader>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Champigny Vs F.Volants</td>
                                            <td><DomicileVolants /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs F.Volants.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Fontenay amical</td>
                                            <td><DomicileFontenayA /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Fontenay amical.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Fontenay</td>
                                            <td><DomicileFontenay /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Fontenay.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny VS Garges</td>
                                            <td><DomicileGarges /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny VS Garges.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Meudon</td>
                                            <td><DomicileMeudon /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Meudon.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Saint-Ouen</td>
                                            <td><DomicileStouen /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Saint-Ouen.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Viry</td>
                                            <td><DomicileViry /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Viry.zip">Télécharger</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à l'extérieure</PageHeader>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>F.Volants Vs Champigny</td>
                                            <td><ExterieurVolants /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/F.Volants Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Fontenay Vs Champigny amical</td>
                                            <td><ExterieurFontenayA/></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Fontenay Vs Champigny amical.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Fontenay Vs Champigny</td>
                                            <td><ExterieurFontenay/></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Fontenay Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Garges Vs Champigny</td>
                                            <td><ExterieurGarges/></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Garges Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Meudon Vs Champigny</td>
                                            <td><ExterieurMeudon/></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Meudon Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Saint-Ouen Vs Champigny</td>
                                            <td><ExterieurStouen/></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/St Ouen Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Viry Vs Champigny</td>
                                            <td><ExterieurViry/></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Viry Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs={12}>
                                <Button bsStyle="primary" href="../photo/downloads/saison2013.zip">Télécharger toute la saison (4 Go)</Button>
                            </Col>
                        </Panel>
                        <Button bsStyle="info" onClick={ ()=> this.setState({ open2: !this.state.open2, open1: false, open3: false, open4: false })}>
                            Saison 2013 - 2014
                        </Button>
                        <Panel collapsible expanded={this.state.open2}>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à domicile</PageHeader>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Champigny Vs Asnières</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Asnieres.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Dammarie</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Dammarie.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Evry</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Evry.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs F.Volants</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs F.Volants.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Franconville</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Franconville.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Troyes</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Troyes.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Viry (Coupe)</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Viry (Coupe).zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Viry</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Viry.zip">Télécharger</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à l'extérieure</PageHeader>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Asnières Vs Champigny</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Asnieres Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Dammarie Vs Champigny amical</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Dammarie Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Evry Vs Champigny</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Evry Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Franconville Vs Champigny</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Franconville Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Troyes Vs Champigny</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Troyes Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Viry Vs Champigny</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Viry Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs={12}>
                                <Button bsStyle="primary" href="../photo/downloads/saison2014.zip">Télécharger toute la saison</Button>
                            </Col>
                        </Panel>
                        <Button bsStyle="info" onClick={ ()=> this.setState({ open3: !this.state.open3, open1: false, open2: false, open4: false })}>
                            Saison 2014 - 2015
                        </Button>
                        <Panel collapsible expanded={this.state.open3}>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à domicile</PageHeader>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Champigny Vs Joué-les-Tours</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Champigny Vs Joue-les-tours.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Meudon</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Champigny Vs Meudon.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Saint-Ouen</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Champigny Vs St-Ouen.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny VS Troyes</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Champigny Vs Troyes.zip">Télécharger</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à l'extérieure</PageHeader>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>F.Volants Vs Champigny</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/F.Volants Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Fontenay Vs Champigny</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Fontenay Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Joué-les-Tours Vs Champigny</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Joue-les-tours Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Meudon Vs Champigny</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Meudon Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Neuilly Vs Champigny amical</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Neuilly Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Saint-Ouen Vs Champigny</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Saint-Ouen Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs={12}>
                                <Button bsStyle="primary" href="../photo/downloads/saison2015.zip">Télécharger toute la saison</Button>
                            </Col>
                        </Panel>
                        <Button bsStyle="info" onClick={ ()=> this.setState({ open4: !this.state.open4, open1: false, open2: false, open3: false })}>
                            Saison 2015 - 2016
                        </Button>
                        <Panel collapsible expanded={this.state.open4}>
                            <Col xs={12} md={6}>
                                <PageHeader>Match à domicile</PageHeader>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Champigny Vs Evry</td>
                                            <td><Button bsStyle="primary">Voir</Button></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2016/Champigny Vs Evry.zip">Télécharger</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Panel>
                    </Col>
                </Row>
            </section>
        );
    }
}