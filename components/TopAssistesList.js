import React, { Component } from 'react'
import Elans from '../data/Elans.json'
import TopAssistes from './TopAssistes'

export default class TopAssistesList extends Component {

    topAssist() {
        let assiste = Elans.stats;
        assiste.sort(function compare(x,y) {
            return y.assistes - x.assistes;
        });
        return assiste;
    }

    render() {
        return (
            <TopAssistes assistes = {this.topAssist()} />
        );
    }
}