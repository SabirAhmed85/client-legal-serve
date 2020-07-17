import React from 'react';
import Layout from './Layout';
import { NotFound } from './components';
import { Home, Services, ContactLegalServe, Clients, ProcessServerBedford } from './containers';
import { withTracker } from './withTracker';
import { Route, Switch } from 'react-router-dom';
import { RoutesConfig } from './config/routes.config';
import { LegalCourierBedford } from './containers/Services/LegalCourierBedford';

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
          path={RoutesConfig.ProcessServerBedford.path}
          component={withTracker(ProcessServerBedford)}
          exact={RoutesConfig.ProcessServerBedford.exact}
        />
        <Route
          path={RoutesConfig.LegalCourierBedford.path}
          component={withTracker(LegalCourierBedford)}
          exact={RoutesConfig.LegalCourierBedford.exact}
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
