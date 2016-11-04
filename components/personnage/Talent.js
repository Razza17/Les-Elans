import React from 'react'

export default ({nom, desc, competence,  bonus}) => {
    return (
        <tr>
            <td>{nom}</td>
            <td className="text-center">{desc}</td>
            <td className="text-center">{competence}</td>
            <td className="text-center">{bonus}</td>
        </tr>
    );
}