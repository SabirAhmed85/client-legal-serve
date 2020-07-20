import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesConfig } from '../config/routes.config';

const MainLogo = require('../assets/img/logo.png');

const NavBar: React.FC = () => (
  <nav
    role='navigation'
    className='navbar'
    aria-label='main navigation'
  >
    <div className='navbar-wrapper'>
      <div className='brand-wrapper level'>
        <img width='170'
          src={MainLogo}
          alt='Legal Serve - Process Server in Bedfordshire &amp; Buckinghamshire'/>
        <span className='level-right'>07853 166 674</span>
      </div>
      <div className='navbar-routes'>
        <NavLink
          className='navbar-item'
          to={RoutesConfig.Home.path}
          exact={RoutesConfig.Home.exact}
          activeClassName={RoutesConfig.Home.activeClassName}
        >
          <span>{RoutesConfig.Home.displayName}</span>
        </NavLink>
        <div className='seperator' />
        <NavLink
          className='navbar-item'
          to={RoutesConfig.Services.path}
          exact={RoutesConfig.Services.exact}
          activeClassName={RoutesConfig.Services.activeClassName}
        >
          <span>{RoutesConfig.Services.displayName}</span>
        </NavLink>
        <div className='seperator' />
        <NavLink
          className='navbar-item'
          to={RoutesConfig.Contact.path}
          exact={RoutesConfig.Contact.exact}
          activeClassName={RoutesConfig.Contact.activeClassName}
        >
          <span>{RoutesConfig.Contact.displayName}</span>
        </NavLink>
        <div className='seperator' />
        <NavLink
          className='navbar-item'
          to={RoutesConfig.Clients.path}
          exact={RoutesConfig.Clients.exact}
          activeClassName={RoutesConfig.Clients.activeClassName}
        >
          <span>{RoutesConfig.Clients.displayName}</span>
        </NavLink>
      </div>
    </div>
  </nav>
);

export default NavBar;
