import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';
import Campus from './Campus';
import Student from './Student';
import SubmitCampus from './SubmitCampus';
import SubmitStudent from './SubmitStudent';
import EditCampus from './EditCampus';
import EditStudent from './EditStudent';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route
            render={({ location, history }) => (
              <Nav history={history} location={location} />
            )}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/campus/:id" component={Campus} />
          <Route exact path="/student/:id" component={Student} />
          <Route path="/submitcampus" component={SubmitCampus} />
          <Route path="/submitstudent" component={SubmitStudent} />
          <Route path="/campus/:id/edit" component={EditCampus} />
          <Route path="/student/:id/edit" component={EditStudent} />
        </div>
      </HashRouter>
    );
  }
}
