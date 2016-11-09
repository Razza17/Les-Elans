import React from 'react'

export default ({nom, prenom, buts,  assistes, penalites, matchs}) => {
    return (
        <tr>
            <td>{nom}</td>
            <td>{prenom}</td>
            <td>{buts}</td>
            <td>{assistes}</td>
            <td>{buts + assistes}</td>
            <td>{penalites}</td>
            <td>{matchs}</td>
        </tr>
    );
}