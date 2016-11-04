import React from 'react';
import { Table } from 'react-bootstrap';
import Competence from './Competence';
import Wolfgang from '../../data/Wolfgang.json';

export default () => {
    return (
        <div className="col-xs-12">
            <Table condensed hover>
                <thead>
                    <tr>
                        <th className="text-center">Compétences avancées</th>
                        <th className="text-center">Carac.</th>
                        <th className="text-center">Acquis</th>
                        <th className="text-center">+10%</th>
                        <th className="text-center">+20%</th>
                        <th className="text-center">Bonus</th>
                        <th className="text-center">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Wolfgang.competenceA.map((competenceA, i) =>
                            <Competence key={i} {...competenceA}/>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}