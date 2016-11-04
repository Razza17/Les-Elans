import React from 'react';
import Profil from './Profil';
import Wolfgang from '../../data/Wolfgang.json';

export default () => {
    return (
        <div className="col-xs-12">
            {
                Wolfgang.personnage.map((perso, i) =>
                    <Profil key={i} {...perso}/>
                )
            }
        </div>
    )
}