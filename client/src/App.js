import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import NoMatch from "./components/NoMatch"
import Saved from "./components/Saved"
import './reset.css';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="grid">
          <Sidebar />
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/saved" component={Saved}/>
              <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;