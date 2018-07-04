import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

class App extends Component {
  render() {
    return (

        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/About'} component={About}/>
          <Route path={'/Contact'} component={Contact}/>
        </Switch>

    );
  }
}

export default App
