import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute, Switch, browserHistory } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader'
import App from './App';
import './index.css';
import Cert from './Cert';
import Viewcert from './Viewcert';
import KYC from './KYC';

ReactDOM.render(
  <AppContainer>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={App} >
        </Route>
        <Route path="/Viewcert" exact={true} component={Viewcert} />
        <Route path="/KYC" exact={true} component={KYC} />
        </Switch 
        >
    </Router>
  </AppContainer >,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', function () {
    const AppUpdate = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <AppUpdate />
      </AppContainer>,
      document.getElementById('root')
    );
  })
}