import React from 'react';
import Layout from './Layout';
import { NotFound } from './components';
import { Home, Services, ContactLegalServe } from './containers';
import { withTracker } from './withTracker';
import { Route, Switch } from 'react-router-dom';
import { RoutesConfig } from './config/routes.config';

const App: React.FC = () => (
  <Layout>
    <Switch>
      <Route
        path={RoutesConfig.Home.path}
        component={withTracker(Home)}
        exact={RoutesConfig.Home.exact}
      />
      <Route
        path={RoutesConfig.Services.path}
        component={withTracker(Services)}
        exact={RoutesConfig.Services.exact}
      />
      <Route
        path={RoutesConfig.Contact.path}
        component={withTracker(ContactLegalServe)}
        exact={RoutesConfig.Contact.exact}
      />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
