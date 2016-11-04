import React from 'react'
import { Table } from 'react-bootstrap'

export default ({nom, race, carriereA, Acarriere}) => {
    return (
        <Table bordered condensed hover>
            <thead>
                <tr><th colSpan="2" className="text-center">Personnage</th></tr>
            </thead>
            <tbody>
                <tr><td>Nom : {nom}</td></tr>
                <tr><td>Race : {race}</td></tr>
                <tr><td>Carrière Actuelle : {carriereA}</td></tr>
                <tr><td>Ancienne Carrière : {Acarriere}</td></tr>
            </tbody>
        </Table>
    );
}