import React, { Component } from 'react';

export default class Encombrement extends Component {
    render () {
        return (
            <tr className="text-uppercase">
                <th className="text-center">enc. max<br />{this.props.f * 10}</th>
                <th className="text-center">enc. total<br />{this.props.total}</th>
                <th className="text-center">mouvement<br />{this.props.m}</th>
                <th className="text-center">charge<br />10</th>
                <th className="text-center">course<br />15</th>
                <th className="text-center">expérience<br />90</th>
                <th className="text-center">xp total<br />1900</th>
            </tr>
        )
    }
}