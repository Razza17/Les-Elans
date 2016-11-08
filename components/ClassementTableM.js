import React from 'react'

export default ({equipe, joues,  points, gagne, nul, perdu}) => {
    return (
        <tr>
            <td>{equipe}</td>
            <td>{joues}</td>
            <td>{points}</td>
            <td>{gagne}</td>
            <td>{nul}</td>
            <td>{perdu}</td>
        </tr>

    );
}