import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import FeatureAList from './featureA/List';
import FeatureBList from './featureB/List';
import UserList from './user/List';

const routes = [
  { path: '/', exact: true, component: FeatureAList, secure: true },
  { path: '/featb', exact: true, component: FeatureBList, secure: true },
  { path: '/user', exact: true, component: UserList, secure: true },

];

class IndexRoutes extends Component {
  render() {
    return (
      <Switch>
        {routes.map(r => (
          <Route key={r.path} {...r} />
        ))}
      </Switch>
    );
  }
}

export default IndexRoutes;
