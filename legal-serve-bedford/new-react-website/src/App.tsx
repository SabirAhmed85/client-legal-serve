import React from 'react';
import Layout from './Layout';
import { NotFound } from './components';
import { Home, Services, ContactLegalServe, Clients } from './containers';
import { withTracker } from './withTracker';
import { Route, Switch } from 'react-router-dom';
import { RoutesConfig } from './config/routes.config';
import { ProcessServerBedford } from './containers/Services';

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
        render={() => (
          <>
            <Route
              path={RoutesConfig.ProcessServerBedford.path}
              component={withTracker(ProcessServerBedford)}
              exact={RoutesConfig.ProcessServerBedford.exact}
            />
          </>
        )}
      />
      <Route
        path={RoutesConfig.Contact.path}
        component={withTracker(ContactLegalServe)}
        exact={RoutesConfig.Contact.exact}
      />
      <Route
        path={RoutesConfig.Clients.path}
        component={withTracker(Clients)}
        exact={RoutesConfig.Clients.exact}
      />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
