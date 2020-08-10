import React from 'react';
import Link from 'next/link';
import { RoutesConfig } from '../../config/routes.config';
import NavBar from '../navbar/navbar';

const MainLogo = '/img/logo-NEW.svg';

const Footer: React.FC = () => (
  <footer className='footer'>
    <NavBar footerBar={true}></NavBar>
    <div className='content'>Created by <a target='_blank' rel='noopener noreferrer' href='http://www.mydayapp.co.uk/business/'><strong>MyDay in Business</strong></a> &copy; 2020</div>
  </footer>
);

export default Footer;
