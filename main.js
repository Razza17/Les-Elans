import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Home from './components/Home'
import Photos from './components/Photos'
import Classement from './components/Classement'
import Stats from './components/Stats'
import Top5 from './components/Top5'
import Contact from './components/Contact'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/home" component={Home} />
            <Route path="/photos" component={Photos} />
            <Route path="/classement" component={Classement} />
            <Route path="/stats" component={Stats} />
            <Route path="/top5" component={Top5} />
            <Route path="/contact" component={Contact} />
        </Route>
    </Router>
), document.getElementById('app'));