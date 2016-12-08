import React, { Component } from 'react'
import TopButsList from './TopButsList'
import TopAssistesList from './TopAssistesList'
import TopPointsList from './TopPointsList'
import TopPenalitesList from './TopPenalitesList'

export default class Top5 extends Component {
    render() {
        return (
            <section>
                <TopButsList />
                <TopAssistesList />
                <TopPointsList />
                <TopPenalitesList />
            </section>
        );
    }
}