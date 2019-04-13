import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Campuses from './Campuses';
import Students from './Students';
import Nav from './Nav';

export default class App extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                <h1>Home</h1>
                <Route render = {({location, history}) => <Nav history = {history} location = {location} />}/>
                {/* <Nav /> */}
                <Route exact path = '/' component = {Campuses}/>
                <Route exact path = '/campuses' component = {Campuses}/>
                <Route exact path = '/students' component = {Students}/>
                </div>
            </HashRouter>
        )
    }
}