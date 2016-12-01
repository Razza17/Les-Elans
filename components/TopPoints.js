import React from 'react'

export default ({img, prenom, points, matchs}) => {
    return (
        <ul>
            <li>
                <div className="topPosition">4ème</div>
                <div><img src={img[3]} /></div>
                <div className="topTxt">
                    {prenom[3]}
                    <br />{points[3]} points pour {matchs[3]} matchs joués
                    <br />ratio : {(points[3] / matchs[3]).toFixed(2)}
                </div>
            </li>
            <li>
                <div className="topPosition">4ème</div>
                <div><img src={img[1]} /></div>
                <div className="topTxt">
                    {prenom[1]}
                    <br />{points[1]} points pour {matchs[1]} matchs joués
                    <br />ratio : {(points[1] / matchs[1]).toFixed(2)}
                </div>
            </li>
            <li>
                <div className="topPosition">4ème</div>
                <div><img src={img[0]} /></div>
                <div className="topTxt">
                    {prenom[0]}
                    <br />{points[0]} points pour {matchs[0]} matchs joués
                    <br />ratio : {(points[0] / matchs[0]).toFixed(2)}
                </div>
            </li>
            <li>
                <div className="topPosition">4ème</div>
                <div><img src={img[2]} /></div>
                <div className="topTxt">
                    {prenom[2]}
                    <br />{points[2]} points pour {matchs[2]} matchs joués
                    <br />ratio : {(points[2] / matchs[2]).toFixed(2)}
                </div>
            </li>
            <li>
                <div className="topPosition">4ème</div>
                <div><img src={img[4]} /></div>
                <div className="topTxt">
                    {prenom[4]}
                    <br />{points[4]} points pour {matchs[4]} matchs joués
                    <br />ratio : {(points[4] / matchs[4]).toFixed(2)}
                </div>
            </li>
        </ul>
    );
}