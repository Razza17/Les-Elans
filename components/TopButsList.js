import React, { Component } from 'react'
import Elans from '../data/Elans.json'
import TopButs from './TopButs'

export default class TopButsList extends Component {

    topButs() {
        let but = Elans.stats;
        but.sort(function compare(x,y) {
            return y.buts - x.buts;
        });
        return but;
    }

    render() {
        return (
            <TopButs buts = {this.topButs()} />
        );
    }
}