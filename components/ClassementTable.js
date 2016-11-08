import React from 'react'

export default ({position, equipe, joues,  points, gagne, nul, perdu, diff, malus}) => {
    return (
        <tr>
            <td>{position}</td>
            <td>{equipe}</td>
            <td>{joues}</td>
            <td>{points}</td>
            <td>{gagne}</td>
            <td>{nul}</td>
            <td>{perdu}</td>
            <td>{diff}</td>
            <td>{malus}</td>
        </tr>

    );
}