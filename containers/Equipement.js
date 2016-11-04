import React, { Component } from 'react';
import Wolfgang from '../data/Wolfgang.json';
import EncombrementTable from '../components/equipement/EncombrementTable';
import ArmeTable from '../components/equipement/ArmeTable';
import ArmureTable from '../components/equipement/ArmureTable';
import ResumeArmureTable from '../components/equipement/ResumeArmureTable';
import MoneyTable from '../components/equipement/MoneyTable';
import FolieTable from '../components/equipement/FolieTable';

export default class Equipement extends Component {

    enctotal() {

        const myArray = ['arme', 'armure'];
        let total = 0;

        for (let i = 0; i < myArray.length; i++) {
            const data = Wolfgang[myArray[i]];
            for (let j = 0; j < data.length; j++)
                total += data[j].encombrement
            if (i == myArray.length - 1) {
                return Math.round(total)
            }
        }
    };

    ptsTete () {

        const tete = Wolfgang.armure;
        let total = 0;

        for (let i = 0; i < tete.length; i++) {
            if (tete[i].couverture == "Tête") {
                total += tete[i].points;
            }

            if (i == tete.length - 1) {
                return Math.round(total);
            }
        }
    };

    ptsBras () {

        const bras = Wolfgang.armure;
        let total = 0;

        for (let i = 0; i < bras.length; i++) {
            if (bras[i].couverture == "Bras") {
                total += bras[i].points;
            }

            if (i == bras.length - 1) {
                return Math.round(total);
            }
        }
    };

    ptsCorps () {

        const corps = Wolfgang.armure;
        let total = 0;

        for (let i = 0; i < corps.length; i++) {
            if (corps[i].couverture == "Corps") {
                total += corps[i].points;
            }

            if (i == corps.length - 1) {
                return Math.round(total);
            }
        }
    };

    ptsTorse () {

        const torse = Wolfgang.armure;
        let total = 0;

        for (let i = 0; i < torse.length; i++) {
            if (torse[i].couverture == "Corps + Bras") {
                total += torse[i].points;
            }

            if (i == torse.length - 1) {
                return Math.round(total);
            }
        }
    };

    ptsJambes () {

        const jambes = Wolfgang.armure;
        let total = 0;

        for (let i = 0; i < jambes.length; i++) {
            if (jambes[i].couverture == "Jambes") {
                total += jambes[i].points;
            }

            if (i == jambes.length - 1) {
                return Math.round(total);
            }
        }
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-md-8">
                        <EncombrementTable encTotal={this.enctotal()} />
                    </div>
                    <div className="hidden-xs hidden-sm col-md-4 text-center">
                        <img className="col-md-8 col-md-offset-2" src="/img/WarhammerLogo2.png"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <ArmeTable />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        {
                            Wolfgang.actuel.map((be, i) =>
                            <ResumeArmureTable 
                                key={i} {...be}
                                ptsTete = {this.ptsTete()}
                                ptsBras = {this.ptsBras()}
                                ptsCorps = {this.ptsCorps()}
                                ptsTorse = {this.ptsTorse()}
                                ptsJambes = {this.ptsJambes()}
                            />)
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <ArmureTable />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <FolieTable />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-8 col-md-offset-2">
                        {
                            Wolfgang.money.map((money, i) =>
                            <MoneyTable key={i} {...money} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}