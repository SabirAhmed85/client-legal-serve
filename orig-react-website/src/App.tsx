import React from 'react';
import Layout from './Layout';
import { ThemeProvider } from 'styled-components';
import { NotFound } from './components';
import { theme } from './theme';
import Drift from 'react-driftjs';
import { Home, Services, ContactLegalServe, Clients, ProcessServerBedford } from './containers';
import { withTracker } from './withTracker';
import { Route, Switch } from 'react-router-dom';
import { RoutesConfig } from './config/routes.config';
import { LegalCourierBedford } from './containers/Services/LegalCourierBedford';
import ScrollToTop from './config/utils';
import { ClientType } from './containers/Clients/ClientType';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Drift
      appId="gibbpt6fi6r5"
      style={{
        bottom: '8px'
      }}/>
    <Layout>
      <ScrollToTop />
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
          <Route
            path={RoutesConfig.ClientType.path}
            component={ClientType}
            exact={RoutesConfig.ClientType.exact}
          />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </ThemeProvider>
);

export default App;
