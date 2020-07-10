import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainLogo = require('../assets/img/logo.png');

const NavBar: React.FC = () => (
  <nav
    role='navigation'
    className='navbar'
    aria-label='main navigation'
  >
    <div className='navbar-wrapper'>
      <div className='brand-wrapper'>
        <img width='170'
          src={MainLogo}
          alt='Legal Serve - Process Server in Bedfordshire &amp; Buckinghamshire'/>
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
        <NavLink
          className='navbar-item'
          to={RoutesConfig.Services.path}
          exact={RoutesConfig.Services.exact}
          activeClassName={RoutesConfig.Services.activeClassName}
        >
          <span>{RoutesConfig.Services.displayName}</span>
        </NavLink>
        <div className='seperator' />
        <a
          target='_blank'
          aria-label='GitHub'
          className='navbar-item'
          rel='noopener noreferrer'
          href='https://github.com/based-ghost'
        >
          <span>GitHub</span>
          <FontAwesomeIcon icon='external-link-alt' />
        </a>
      </div>
    </div>
  </nav>
);

export default NavBar;
