import React from 'react'

export default ({nom, encombrement, degats, portee, recharge, attribut}) => {
    return (
        <tr>
            <td>{nom}</td>
            <td>{encombrement}</td>
            <td>{degats}</td>
            <td>{portee}</td>
            <td>{recharge}</td>
            <td>{attribut}</td>
        </tr>
    )
}