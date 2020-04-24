import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StudyListContainer from '../containers/StudyListContainer';
import StudyViewerContainer from '../containers/StudyViewerContainer';

const routes = [
  { path: '/', exact: true, component: StudyListContainer },
  { path: '/viewer/:id', component: StudyViewerContainer },
];

const renderRoutes = () => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => <route.component {...props} route={route} />}
          />
        );
      })}
    </Switch>
  );
};

export default renderRoutes;
