import React from 'react';
import { RoutesConfig } from '../../config/routes.config';
import NavBarLink from './navbar-link/navbar-link';

import { BurgerMenu, BurgerMenuIcon } from './navbar.style';

const MainLogo = '/img/logo-NEW.svg';

type NavBarProps = {
  footerBar?: boolean;
};

const NavBar: React.FC<NavBarProps> = ({
  footerBar
}) => (
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
        <NavBarLink
          {...RoutesConfig.Home}
          footerBar={footerBar}
          ></NavBarLink>
        <NavBarLink
          {...RoutesConfig.Services}
          footerBar={footerBar}
          ></NavBarLink>
        <NavBarLink
          {...RoutesConfig.Contact}
          footerBar={footerBar}
          ></NavBarLink>
        {(() => { if (!footerBar) {
          return (
            <BurgerMenu
              className='is-hidden-tablet'>
              <BurgerMenuIcon
                className='is-visible-mobile'
                icon='bars'></BurgerMenuIcon>
            </BurgerMenu>
          )
        }})()}
        <NavBarLink
          {...RoutesConfig.Clients}
          footerBar={footerBar}
          lastLink={true}
          isHiddenMobile={!footerBar && true}
          ></NavBarLink>
      </div>
    </div>
  </nav>
);

export default NavBar;
