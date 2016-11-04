import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Personnage from './containers/Personnage'
import Equipement from './containers/Equipement'
import App from './App'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/personnage" component={Personnage} />
            <Route path="/equipement" component={Equipement} />
        </Route>
    </Router>
), document.getElementById('app'));