import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home'
import Workspace from './Workspace/Workspace'
import Api from './Api/Api'
import Unknown from './Unknown/Unknown'
import './App.css'

const App = () => {
  return (
    <div className="mainApp">
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Switch>
          <Route exact path={`/`} component={Home}/>
          <Route exact path={`/workspace`} component={Workspace}/>
          <Route exact path={`/Api`} component={Api}/>
          <Route exact path={`/:404`} component={Unknown}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
