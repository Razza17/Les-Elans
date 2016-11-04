import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Wolfgang from '../../data/Wolfgang.json';
import Encombrement from './Encombrement';

export default class EncombrementTable extends Component {
    render() {
        return (
            <div className="col-xs-12">
                <Table condensed hover >
                    <thead>
                    {
                        Wolfgang.actuel.map((enc, i) =>
                            <Encombrement total={this.props.encTotal} key={i} {...enc} />
                        )
                    }
                    </thead>
                </Table>
            </div>
        )
    }
}