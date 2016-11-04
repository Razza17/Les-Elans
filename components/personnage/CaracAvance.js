import React from 'react'

export default ({cc, ct, f, e, ag, int, fm, soc, a, b, bf, be, m, mag, pf, pd}) => {
    return (
        <tr className="text-center">
            <td className="black">Avancé</td>
            <td>{cc}</td>
            <td>{ct}</td>
            <td>{f}</td>
            <td>{e}</td>
            <td>{ag}</td>
            <td>{int}</td>
            <td>{fm}</td>
            <td>{soc}</td>
            <td>{a}</td>
            <td>{b}</td>
            <td>{bf}</td>
            <td>{be}</td>
            <td>{m}</td>
            <td>{mag}</td>
            <td>{pf}</td>
            <td>{pd}</td>
        </tr>
    );
}