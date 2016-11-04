import React from 'react'
import Wolfgang from '../../data/Wolfgang.json';

export default ({nom, carac, acquis, dix, vingt, bonus}) => {
    return (
        <tr>
            <td>{nom}</td>
            <td className="text-center">{carac}</td>
            <td className="text-center">{acquis && <img src="../img/checked.png" />}</td>
            <td className="text-center">{dix}</td>
            <td className="text-center">{vingt}</td>
            <td className="text-center">{bonus}</td>
            <td className="text-center">
                {carac == '(F)' && acquis && Wolfgang.actuel[0].f + dix + vingt + bonus}
                {carac == '(F)' && !acquis && Math.round(Wolfgang.actuel[0].f / 2 + dix + vingt + bonus)}
                {carac == '(Soc)' && acquis && Wolfgang.actuel[0].soc + dix + vingt + bonus}
                {carac == '(Soc)' && !acquis && Math.round(Wolfgang.actuel[0].soc / 2 + dix + vingt + bonus)}
                {carac == '(Ag)' && acquis && Wolfgang.actuel[0].ag + dix + vingt + bonus}
                {carac == '(Ag)' && !acquis && Math.round(Wolfgang.actuel[0].ag / 2 + dix + vingt + bonus)}
                {carac == '(Int)' && acquis && Wolfgang.actuel[0].int + dix + vingt + bonus}
                {carac == '(Int)' && !acquis && Math.round(Wolfgang.actuel[0].int / 2 + dix + vingt + bonus)}
                {carac == '(E)' && acquis && Wolfgang.actuel[0].e + dix + vingt + bonus}
                {carac == '(E)' && !acquis && Math.round(Wolfgang.actuel[0].e / 2 + dix + vingt + bonus)}
            </td>
        </tr>
    );
}