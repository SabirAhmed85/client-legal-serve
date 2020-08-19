import React, { Fragment } from 'react';
import { NavBar, BackToTop, Footer } from '../components';

const Layout: React.FunctionComponent = ({
  children,
  // deviceType: { mobile, tablet, desktop },
}) => {
  return (
    <Fragment>
        <NavBar />
        {children}
        <BackToTop />
        <Footer />
    </Fragment>
  );
};

export default Layout;
