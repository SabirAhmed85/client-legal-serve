import React, { useRef, useState } from 'react';

import BedfordBoroughCouncilLogo from '../assets/img/client-logos/bedford-borough-council-client-logo.png';
import BoltonCouncilLogo from '../assets/img/client-logos/bolton-council-client-logo.jpg';
import PowysCouncilLogo from '../assets/img/client-logos/powys-county-council-wales-client-logo.png';
import CambridgeLawPractiseLogo from '../assets/img/client-logos/cambridge-family-law-practise-client-logo.png';
import FullersLogo from '../assets/img/client-logos/fullers-solicitors-bedford-client-logo.png';
import KennedysLogo from '../assets/img/client-logos/Kennedys-law-solicitors-cambridge-and-london-client-logo.jpg';
import WatsonsLogo from '../assets/img/client-logos/watsons-solicitors-warrington-client-logo.jpg';
import RayBorleyLogo from '../assets/img/client-logos/ray-borley-dunkley-llp-milton-keynes-client-logo.jpg';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 'styled-components' specific to BackToTop.tsx component
const NextSlideLink = styled.a<{}>`
  width: 3.5rem;
  z-index: 9999;
  display: block;
  height: 3.5rem;
  right: 1.25rem;
  cursor: pointer;
  position: absolute;
  user-select: none;
  border-radius: 50%;
  -webkit-touch-callout: none;
  background: rgb(37, 40, 47);
  -webkit-tap-highlight-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
  transition: opacity 0.4s ease, bottom 0.4s ease;
  bottom: 8rem};
  opacity: 0.5};
`;

const AngleRightIcon = styled(FontAwesomeIcon)`
  display: block;
  color: #fff;
  font-size: 1.75em;
  padding-left: 0.1rem;
  margin: 0.75rem auto auto auto;
`;

const OurClients = () => {
  const showLocalAuth = useRef<string>('show');
  const showLawPractises = useRef<string>('hide');
  const [show, setShow] = useState<boolean>(false);

  const nextSlide = () => {
    if (showLocalAuth.current === 'show') {
      showLocalAuth.current = 'hide';
      showLawPractises.current = 'show';
      setShow(true);
    } else if (showLocalAuth.current === 'hide') {
      showLocalAuth.current = 'show';
      showLawPractises.current = 'hide';
      setShow(false);
    }
  };

  return (
    <div className='columns'>
      <div className='column' style={{position: 'relative'}}>
        <h3 className='title large-title'>Our Clients</h3>
        <div className='content clients-slides'>
          <div className={`fadeIn-animation ${showLocalAuth.current}`}>
            <h4 className='title small-title'>Local Authorities</h4>
            <div className='columns is-tablet'>
              <div className='column has-text-centered'>
                <img src={BedfordBoroughCouncilLogo} alt='Bedford Borough Council Logo'/>
              </div>
              <div className='column has-text-centered'>
                <img src={BoltonCouncilLogo} alt='Bolton Council Logo'/>
              </div>
              <div className='column has-text-centered'>
                <img src={PowysCouncilLogo} alt='Powys County Council (in Wales) Logo'/>
              </div>
              <div className='column has-text-centered'>
                <img src={BedfordBoroughCouncilLogo} alt='Bedford Borough Council'/>
              </div>
            </div>
          </div>
          <div className={`fadeIn-animation ${showLawPractises.current}`}>
            <h4 className='title small-title'>Law Practises & Solicitors</h4>
            <div className='columns is-tablet'>
              <div className='column has-text-centered'>
                <img src={CambridgeLawPractiseLogo} alt='Cambridge Family Law Practise Logo'/>
              </div>
              <div className='column has-text-centered'>
                <img src={FullersLogo} alt='Fullers Solicitors (in Bedford) Logo'/>
              </div>
              <div className='column has-text-centered'>
                <img src={KennedysLogo} alt='Kennedys Law (servicing Cambridge & London) Logo'/>
              </div>
              <div className='column has-text-centered'>
                <img src={WatsonsLogo} alt='Watsons Solicitors (in Warrington) Logo'/>
              </div>
              <div className='column has-text-centered'>
                <img src={RayBorleyLogo} alt='Ray Borley Dunkley LLP (in Bedford) Logo'/>
              </div>
            </div>
          </div>
        </div>
        <NextSlideLink
          aria-label='next'
          role='button'
          onClick={() => nextSlide()}>
          <AngleRightIcon icon='angle-right' />
        </NextSlideLink>
      </div>
    </div>
  );
};

export default OurClients;
