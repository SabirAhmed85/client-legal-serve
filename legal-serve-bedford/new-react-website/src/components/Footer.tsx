import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { RoutesConfig } from '../config/routes.config';

const MainLogo = require('../assets/img/logo.png');

const Footer: React.FC = () => (
  <footer className='footer'>
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
            <NavLink
              className='navbar-item'
              to={RoutesConfig.Services.path}
              exact={RoutesConfig.Services.exact}
              activeClassName={RoutesConfig.Services.activeClassName}
            >
              <span>{RoutesConfig.Services.displayName}</span>
            </NavLink>
            <NavLink
              className='navbar-item'
              to={RoutesConfig.Contact.path}
              exact={RoutesConfig.Contact.exact}
              activeClassName={RoutesConfig.Contact.activeClassName}
            >
              <span>{RoutesConfig.Contact.displayName}</span>
            </NavLink>
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
    
      {/*
    <div className='buttons'>
      <a
        target='_blank'
        aria-label='GitHub'
        rel='noopener noreferrer'
        className='button is-medium'
        href='https://github.com/based-ghost'
      >
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a
        href='#/'
        aria-label='Twitter'
        className='button is-medium'
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
      <a
        href='#/'
        aria-label='Medium'
        className='button is-medium'
      >
        <FontAwesomeIcon icon={['fab', 'medium-m']} />
      </a>
    </div>
      */}
    <div className='content'>Created by <a target='_blank' rel='noopener noreferrer' href='http://www.mydayapp.co.uk/business/'><strong>MyDay in Business</strong></a> &copy; 2020</div>
  </footer>
);

export default Footer;
