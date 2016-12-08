import React, { Component } from 'react'
import Elans from '../data/Elans.json'
import TopPenalites from './TopPenalites'

export default class TopPenalitesList extends Component {

    topPenalite() {
        let penalite = Elans.stats;
        penalite.sort(function compare(x,y) {
            return y.penalites - x.penalites;
        });
        return penalite;
    }

    render() {
        return (
            <TopPenalites penalites = {this.topPenalite()} />
        );
    }
}