import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import routes from "./routes/routes.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {routes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} exact/>
      })}
    </Switch>
  </Router>, 
  document.getElementById('root')
);