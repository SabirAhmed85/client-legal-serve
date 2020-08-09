import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const MainLogo = require('../assets/img/logo-NEW.svg');

// 'styled-components' specific to BackToTop.tsx component
const BurgerMenu = styled.button.attrs(() => ({
  role: 'button',
  'aria-label': 'Menu'
}))`
  border:none;
  background: none;
  width: 3.5rem;
  height: 3.5rem;
  margin-left: -1rem;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.4s ease, bottom 0.4s ease;
`;

const BurgerMenuIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.75em;
`;

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
        <BurgerMenu
          className='is-hidden-tablet'>
          <BurgerMenuIcon
            className='is-visible-mobile'
            icon='bars'></BurgerMenuIcon>
        </BurgerMenu>
        <NavLink
          className='navbar-item is-hidden-mobile'
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
