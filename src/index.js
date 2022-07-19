import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";

import Log from './components/Auth/login';
import Dashboard from './components/layout/dashboard';

//bcip portal
import Adduser from './components/bcipportal/adduser';
import Allusers from './components/bcipportal/allusers';

//embellishmenttool
import Addemb from './components/embellishmenttool/addemb';
import Reademb from './components/embellishmenttool/reademb';


//fivemrisktool
import Addfive from './components/fivemrisktool/addfive';
import Readfive from './components/fivemrisktool/readfive';

//preproplantool
import Addpre from './components/preproplantool/addpre';
import Readpre from './components/preproplantool/readpre';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Log />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addemb">
            <Addemb />
          </Route>
          <Route path="/reademb">
            <Reademb />
          </Route>
          <Route path="/addfive">
            <Addfive />
          </Route>
          <Route path="/readfive">
            <Readfive />
          </Route>
          <Route path="/addpre">
            <Addpre />
          </Route>
          <Route path="/readpre">
            <Readpre />
          </Route>
          <Route path="/adduser">
            <Adduser />
            </Route>
            <Route path="/allusers">
            <Allusers />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
