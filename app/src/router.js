import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage.js';
import OrderPage from './routes/OrderPage.js';
import WaitingPage from './routes/WaitingPage.js';
import ConfirmPage from './routes/ConfirmPage.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/order" component={OrderPage} />
      <Route path="/waiting" component={WaitingPage} />
      <Route path="/confirm" component={ConfirmPage} />
    </Router>
  );
}

export default RouterConfig;
