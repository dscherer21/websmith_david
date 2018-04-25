import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Component } from "react";
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import StoreFront from './components/storefront';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App text-center">
          <Header/>
          <Switch>
            <Route exact path='/' component={StoreFront}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
