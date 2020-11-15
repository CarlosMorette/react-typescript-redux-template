import React from 'react';
import routes, { home } from './routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exac path={home.path} component={home.component} />
        {routes.map((route, index) => <Route component={route.component} path={route.path} key={index} />)}
      </Switch>
    </Router>
  );
}

export default App;
