import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';
import Main from '../pages/Main'
import SignIn from '../pages/Auth/SignIn';
import Login from '../pages/Auth/Login';
import { SIGNIN, ROOT, TRAIN_MODEL, LOGIN} from './constants';
import TrainModel from '../pages/TrainModel';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path={SIGNIN} component={SignIn} />
      <Guest path={LOGIN} component={Login} />
      
      <Private path={ROOT} exact component={Main} />
      <Private path={TRAIN_MODEL} exact component={TrainModel} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
