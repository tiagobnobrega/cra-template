import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import FeatureAView from './featureA/View';

const routes = [{ path: '/', exact: true, component: FeatureAView, secure: true }];

class IndexRoutes extends Component {
  render() {
    return (
      <Switch>
        routes.map((r) => ( <Route {...r} />) )
      </Switch>
    );
  }
}
