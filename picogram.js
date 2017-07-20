import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Main from './pages/main.jsx';
import About from './pages/about.jsx';
import Err from './pages/error.jsx';

class Picogram extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/*' component={Err} />
      </Router>
    );
  }
}



export default Picogram;
