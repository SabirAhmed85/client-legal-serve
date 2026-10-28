import React, { Fragment } from 'react';
import { NavBar, BackToTop, Footer } from '../components';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({
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
