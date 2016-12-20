import React, { Component } from 'react'
import TopButsList from '../components/TopButsList'
import TopAssistesList from '../components/TopAssistesList'
import TopPointsList from '../components/TopPointsList'
import TopPenalitesList from '../components/TopPenalitesList'

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