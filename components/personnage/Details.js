import React from 'react'
import { Table } from 'react-bootstrap'

export default ({age, sexe, yeux, taille, cheveux, poids, signeAstral, fraterie, naissance, distinction}) => {
    return (
        <Table condensed bordered hover>
            <thead>
                <tr><th colSpan="2" className="text-center">Détails Personnels</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Age : {age} ans</td>
                    <td>Sexe : {sexe}</td>
                </tr>
                <tr>
                    <td>Couleur des yeux : {yeux}</td>
                    <td>Taille : {taille}</td>
                </tr>
                <tr>
                    <td>Couleur des cheveux : {cheveux}</td>
                    <td>Poids : {poids}</td>
                </tr>
                <tr>
                    <td>Signe Astral : {signeAstral}</td>
                    <td>Nbre de frères et soeurs : {fraterie}</td>
                </tr>
                <tr>
                    <td colSpan="2">Lieu de Naissance : {naissance}</td>
                </tr>
                <tr>
                    <td colSpan="2">Signes distinctifs : {distinction}</td>
                </tr>
            </tbody>
        </Table>
    );
}