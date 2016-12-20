import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App'
import Home from './pages/Home'
import Photos from './pages/Photos'
import Classement from './pages/Classement'
import Stats from './pages/Stats'
import Top5 from './pages/Top5'
import Contact from './pages/Contact'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/photos" component={Photos} />
            <Route path="/classement" component={Classement} />
            <Route path="/stats" component={Stats} />
            <Route path="/top5" component={Top5} />
            <Route path="/contact" component={Contact} />
        </Route>
    </Router>
), document.getElementById('app'));