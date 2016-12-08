import React, { Component } from 'react'
import TopPoints from './TopPoints'
import Elans from '../data/Elans.json'

export default class TopPointsList extends Component {

    topPoint() {
        let point = Elans.stats;
        point.sort(function compare(x,y) {
            return y.points - x.points;
        });
        return point;
    }

    render() {
        return (
            <TopPoints points = {this.topPoint()} />
        );
    }
}