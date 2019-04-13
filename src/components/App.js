import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Nav from './Nav';
import Campuses from './Campuses';
import Students from './Students';
import Campus from './Campus';
import Student from './Student';

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
                <Route path = '/campus/:id' component = {Campus}/>
                <Route path = '/student/:id' component = {Student}/>
                </div>
            </HashRouter>
        )
    }
};