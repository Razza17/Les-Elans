import React from 'react'

export default ({nom, prenom, buts,  assistes, points, penalites, matchs}) => {
    return (
        <tr>
            <td>{nom}</td>
            <td>{prenom}</td>
            <td>{buts}</td>
            <td>{assistes}</td>
            <td>{points}</td>
            <td>{penalites}</td>
            <td>{matchs}</td>
        </tr>
    );
}