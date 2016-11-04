import React from 'react';
import { Table } from 'react-bootstrap';
import Talent from './Talent';
import Wolfgang from '../../data/Wolfgang.json';

export default () => {
    return (
        <div className="col-xs-12">
            <Table condensed hover>
                <thead>
                    <tr>
                        <th className="text-center">Talents</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Compétences</th>
                        <th className="text-center">Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Wolfgang.talents.map((talents, i) =>
                            <Talent key={i} {...talents}/>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}