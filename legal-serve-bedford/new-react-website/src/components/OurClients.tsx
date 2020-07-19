import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import device from '../config/device.config';

import BedfordBoroughCouncilLogo from '../assets/img/client-logos/bedford-borough-council-client-logo.png';
import BoltonCouncilLogo from '../assets/img/client-logos/bolton-council-client-logo.png';
import PowysCouncilLogo from '../assets/img/client-logos/powys-county-council-wales-client-logo.png';
import MiltonKeynesCouncilLogo from '../assets/img/client-logos/milton-keynes-council-client-logo.png';
import CambridgeLawPractiseLogo from '../assets/img/client-logos/cambridge-family-law-practise-client-logo.png';
import FullersLogo from '../assets/img/client-logos/fullers-solicitors-bedford-client-logo.png';
import KennedysLogo from '../assets/img/client-logos/Kennedys-law-solicitors-cambridge-and-london-client-logo.png';
import WatsonsLogo from '../assets/img/client-logos/watsons-solicitors-warrington-client-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 'styled-components' specific to BackToTop.tsx component
const NextSlideLink = styled.a<{}>`
  width: 3.5rem;
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
  top: 10%;
  opacity: 0.5;

  @media ${device.tablet} {
    top: 28%;
  }
`;

const AngleRightIcon = styled(FontAwesomeIcon)`
  display: block;
  color: #fff;
  font-size: 1.75em;
  padding-left: 0.1rem;
  margin: 0.75rem auto auto auto;
`;

const StyledColumn = styled.div`
  padding: 0 2em;
`;

const OurClients = (props) => {
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
        {props.minimal ? '' : <h3 className='title large-title'>Our Clients</h3>}
        <div className='content clients-slides'>
          <div className={`fadeIn-animation ${showLocalAuth.current}`}>
            {props.minimal ? '' : <h4 className='title small-title'>Local Authorities</h4>}
            <div className='columns is-tablet'>
              <StyledColumn className='column has-text-centered'>
                <img src={BedfordBoroughCouncilLogo} alt='Bedford Borough Council Logo'/>
              </StyledColumn>
              <StyledColumn className='column has-text-centered'>
                <img src={BoltonCouncilLogo} alt='Bolton Council Logo'/>
              </StyledColumn>
              <StyledColumn className='column has-text-centered'>
                <img src={PowysCouncilLogo} alt='Powys County Council (in Wales) Logo'/>
              </StyledColumn>
              <StyledColumn className='column has-text-centered'>
                <img src={MiltonKeynesCouncilLogo} alt='Milton Keynes Council'/>
              </StyledColumn>
            </div>
          </div>
          <div className={`fadeIn-animation ${showLawPractises.current}`}>
            {props.minimal ? '' : <h4 className='title small-title'>Law Practises & Solicitors</h4>}
            <div className='columns is-tablet'>
              <StyledColumn className='column has-text-centered'>
                <img src={CambridgeLawPractiseLogo} alt='Cambridge Family Law Practise Logo'/>
              </StyledColumn>
              <StyledColumn className='column has-text-centered'>
                <img src={FullersLogo} alt='Fullers Solicitors (in Bedford) Logo'/>
              </StyledColumn>
              <StyledColumn className='column has-text-centered'>
                <img src={KennedysLogo} alt='Kennedys Law (servicing Cambridge & London) Logo'/>
              </StyledColumn>
              <StyledColumn className='column has-text-centered'>
                <img src={WatsonsLogo} alt='Watsons Solicitors (in Warrington) Logo'/>
              </StyledColumn>
              {/*
              <div className='column has-text-centered'>
                <img src={RayBorleyLogo} alt='Ray Borley Dunkley LLP (in Bedford) Logo'/>
              </div>
              */}
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

OurClients.defaultProps = {
  minimal: false
};

export default OurClients;
