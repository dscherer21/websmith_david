import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import StoreFront from './components/storefront';
import Forge from './components/forge';
import Raven from './components/raven';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App text-center">
          <Header/>
          <Switch>
            <Route exact path='/' component={StoreFront}/>
            <Route path='/forge' component={Forge}/>
            <Route path='/raven' component={Raven}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
