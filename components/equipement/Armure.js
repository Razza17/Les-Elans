import React from 'react'

export default ({nom, encombrement, couverture, points}) => {
    return (
        <tr>
            <td>{nom}</td>
            <td>{encombrement}</td>
            <td>{couverture}</td>
            <td>{points}</td>
        </tr>
    )
}