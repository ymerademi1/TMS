import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/main';
import Sprints from './pages/sprints';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div style={{backgroundColor: '#F8F8F8', minHeight: '100vh'}}>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/sprints">
            <Sprints />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
