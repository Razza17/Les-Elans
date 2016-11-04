import React from 'react';
import Details from './Details';
import Wolfgang from '../../data/Wolfgang.json';

export default () => {
    return (
        <div className="col-xs-12">
            {
                Wolfgang.details.map((details, i) =>
                    <Details key={i} {...details}/>
                )
            }
        </div>
    )
}