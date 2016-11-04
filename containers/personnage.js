import React from 'react';
import ProfilTable from '../components/personnage/ProfilTable';
import DetailsTable from '../components/personnage/DetailsTable';
import CaracTable from '../components/personnage/CaracTable';
import FortuneTable from '../components/personnage/FortuneTable';
import BlessureTable from '../components/personnage/BlessureTable';
import MunitionTable from '../components/personnage/MunitionTable';
import CompetenceB from '../components/personnage/CompetenceB';
import CompetenceA from '../components/personnage/CompetenceA';
import TalentTable from '../components/personnage/TalentTable';

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <ProfilTable />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <DetailsTable />
                </div>
                <div className="hidden-xs hidden-sm col-md-4 text-center">
                    <img src="/img/WarhammerLogo.png"/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6 col-md-offset-1">
                    <CaracTable />
                </div>
                <div className="col-xs-12 col-md-3">
                    <div className="col-xs-12 col-sm-4 col-md-12">
                        <FortuneTable />
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-12">
                        <BlessureTable />
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-12">
                        <MunitionTable />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-4 col-md-offset-1">
                    <CompetenceB />
                </div>
                <div className="col-xs-12 col-md-4 col-md-offset-1">
                    <CompetenceA />
                    <TalentTable />
                </div>
            </div>
        </div>
    );
}