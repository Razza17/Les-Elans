import React, { Component } from 'react'
import { Row, Col, PageHeader, Panel, Button, Table } from 'react-bootstrap'

// Saison 2013
import DomicileVolants13 from '../components/saison13/DomicileVolants13'
import DomicileFontenayA13 from '../components/saison13/DomicileFontenayA13'
import DomicileFontenay13 from '../components/saison13/DomicileFontenay13'
import DomicileGarges13 from '../components/saison13/DomicileGarges13'
import DomicileMeudon13 from '../components/saison13/DomicileMeudon13'
import DomicileStouen13 from '../components/saison13/DomicileStouen13'
import DomicileViry13 from '../components/saison13/DomicileViry13'
import ExterieurVolants13 from '../components/saison13/ExterieurVolants13'
import ExterieurFontenayA13 from '../components/saison13/ExterieurFontenayA13'
import ExterieurFontenay13 from '../components/saison13/ExterieurFontenay13'
import ExterieurGarges13 from '../components/saison13/ExterieurGarges13'
import ExterieurMeudon13 from '../components/saison13/ExterieurMeudon13'
import ExterieurStouen13 from '../components/saison13/ExterieurStouen13'
import ExterieurViry13 from '../components/saison13/ExterieurViry13'

// Saison 2014
import DomicileVolants14 from '../components/saison14/DomicileVolants14'
import DomicileAsnieres14 from '../components/saison14/DomicileAsnieres14'
import DomicileDammarie14 from '../components/saison14/DomicileDammarie14'
import DomicileEvry14 from '../components/saison14/DomicileEvry14'
import DomicileFranconville14 from '../components/saison14/DomicileFranconville14'
import DomicileTroyes14 from '../components/saison14/DomicileTroyes14'
import DomicileViry14 from '../components/saison14/DomicileViry14'
import DomicileViryC14 from '../components/saison14/DomicileViryC14'
import ExterieurAsnieres14 from '../components/saison14/ExterieurAsnieres14'
import ExterieurDammarie14 from '../components/saison14/ExterieurDammarie14'
import ExterieurEvry14 from '../components/saison14/ExterieurEvry14'
import ExterieurFranconville14 from '../components/saison14/ExterieurFranconville14'
import ExterieurTroyes14 from '../components/saison14/ExterieurTroyes14'
import ExterieurViry14 from '../components/saison14/ExterieurViry14'

// Saison 2015
import DomicileJoue15 from '../components/saison15/DomicileJoue15'
import DomicileMeudon15 from '../components/saison15/DomicileMeudon15'
import DomicileStouen15 from '../components/saison15/DomicileStouen15'
import DomicileTroyes15 from '../components/saison15/DomicileTroyes15'
import ExterieurFontenay15 from '../components/saison15/ExterieurFontenay15'
import ExterieurJoue15 from '../components/saison15/ExterieurJoue15'
import ExterieurMeudon15 from '../components/saison15/ExterieurMeudon15'
import ExterieurNeuilly15 from '../components/saison15/ExterieurNeuilly15'
import ExterieurStouen15 from '../components/saison15/ExterieurStouen15'
import ExterieurVolants15 from '../components/saison15/ExterieurVolants15'

//saison 2016
import DomicileEvry16 from '../components/saison16/DomicileEvry16'

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
                                            <td><DomicileVolants13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs F.Volants.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Fontenay amical</td>
                                            <td><DomicileFontenayA13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Fontenay amical.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Fontenay</td>
                                            <td><DomicileFontenay13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Fontenay.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Garges</td>
                                            <td><DomicileGarges13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny VS Garges.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Meudon</td>
                                            <td><DomicileMeudon13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Meudon.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Saint-Ouen</td>
                                            <td><DomicileStouen13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Champigny Vs Saint-Ouen.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Viry</td>
                                            <td><DomicileViry13 /></td>
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
                                            <td><ExterieurVolants13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/F.Volants Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Fontenay Vs Champigny amical</td>
                                            <td><ExterieurFontenayA13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Fontenay Vs Champigny amical.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Fontenay Vs Champigny</td>
                                            <td><ExterieurFontenay13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Fontenay Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Garges Vs Champigny</td>
                                            <td><ExterieurGarges13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Garges Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Meudon Vs Champigny</td>
                                            <td><ExterieurMeudon13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Meudon Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Saint-Ouen Vs Champigny</td>
                                            <td><ExterieurStouen13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/St Ouen Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Viry Vs Champigny</td>
                                            <td><ExterieurViry13 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2013/Viry Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs={12}>
                                <Button bsStyle="primary" href="../photo/downloads/saison2013.zip">Télécharger toute la saison (1,19 Go)</Button>
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
                                            <td><DomicileAsnieres14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Asnieres.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Dammarie</td>
                                            <td><DomicileDammarie14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Dammarie.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Evry</td>
                                            <td><DomicileEvry14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Evry.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs F.Volants</td>
                                            <td><DomicileVolants14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs F.Volants.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Franconville</td>
                                            <td><DomicileFranconville14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Franconville.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Troyes</td>
                                            <td><DomicileTroyes14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Troyes.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Viry (Coupe)</td>
                                            <td><DomicileViryC14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Champigny Vs Viry (Coupe).zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Viry</td>
                                            <td><DomicileViry14 /></td>
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
                                            <td><ExterieurAsnieres14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Asnieres Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Dammarie Vs Champigny amical</td>
                                            <td><ExterieurDammarie14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Dammarie Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Evry Vs Champigny</td>
                                            <td><ExterieurEvry14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Evry Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Franconville Vs Champigny</td>
                                            <td><ExterieurFranconville14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Franconville Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Troyes Vs Champigny</td>
                                            <td><ExterieurTroyes14 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2014/Troyes Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Viry Vs Champigny</td>
                                            <td><ExterieurViry14 /></td>
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
                                            <td><DomicileJoue15 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Champigny Vs Joue-les-tours.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Meudon</td>
                                            <td><DomicileMeudon15 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Champigny Vs Meudon.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Saint-Ouen</td>
                                            <td><DomicileStouen15 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Champigny Vs St-Ouen.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Champigny Vs Troyes</td>
                                            <td><DomicileTroyes15 /></td>
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
                                            <td><ExterieurVolants15 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/F.Volants Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Fontenay Vs Champigny</td>
                                            <td><ExterieurFontenay15 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Fontenay Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Joué-les-Tours Vs Champigny</td>
                                            <td><ExterieurJoue15 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Joue-les-tours Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Meudon Vs Champigny</td>
                                            <td><ExterieurMeudon15 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Meudon Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Neuilly Vs Champigny amical</td>
                                            <td><ExterieurNeuilly15 /></td>
                                            <td><Button bsStyle="primary" href="../photo/saison2015/Neuilly Vs Champigny.zip">Télécharger</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Saint-Ouen Vs Champigny</td>
                                            <td><ExterieurStouen15 /></td>
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
                                            <td><DomicileEvry16 /></td>
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