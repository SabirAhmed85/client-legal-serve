import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import device from '../config/device.config';
import { ClientsBannerConfig, ClientsBannerPanelConfig, ClientsLogos } from '../config/clients-banner.config';

const OurServicesImg = '/img/court-order-serving-bedford.png';

// types
type OurClientsProps = {
  minimal?: boolean;
  clientType?: string;
};

// const ClientLogoImages = require.context('/img/client-logos/', true);

// 'styled-components' specific to OurClients.tsx component
const StyledColumn = styled.div`
  padding: 0 2em;
`;

const NextSlideLink = styled.a.attrs(() => ({
  role: 'button',
  'aria-label': 'Next'
}))`
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
  top: ${(props: OurClientsProps) => props.minimal ? '10%' : '18%'};
  opacity: 0.5;

  @media ${device.tablet} {
    top: ${(props: OurClientsProps) => props.minimal ? '28%' : '52%'};
  }
`;

const AngleRightIcon = styled(FontAwesomeIcon)`
  display: block;
  color: #fff;
  font-size: 1.75em;
  padding-left: 0.1rem;
  margin: 0.75rem auto auto auto;
`;

const clientsSlidesContent = (props, showLocalAuth?, showLawPractises?) => {
  const clientType = props.clientType;
  let html = [];

  const clientsLogosContent = (panel: ClientsBannerPanelConfig) => {
    let clientsLogosHtml = [];

    Object.keys(ClientsLogos).forEach((val, index) => {
      const ClientLogo = ClientsLogos[val];

      if (
        ((panel.clientType && ClientLogo.type === panel.clientType)
        || (panel.region && ClientLogo.region.includes(panel.region)))
        && ((clientType === 'default' && ClientLogo.default)
          || clientType !== 'default')
        && clientsLogosHtml.length < 5
      ) {
        clientsLogosHtml.push(
          <StyledColumn key={ClientLogo.imageUrl} className='column has-text-centered'>
            <img src={`/img/client-logos/${ClientLogo.imageUrl}`} alt={ClientLogo.altTag}/>
          </StyledColumn>
        );
      }
    });

    return clientsLogosHtml;
  };

  ClientsBannerConfig[clientType].panels.forEach((panel, index) => {
    html.push(
    <div key={panel.clientType || panel.region}
      className={classNames({
        'fadeIn-animation': ClientsBannerConfig[clientType].panels.length > 1,
        'show': (ClientsBannerConfig[clientType].panels.length > 1 && index === 0) ? showLocalAuth.current === 'show' : showLawPractises.current === 'show',
        'hide': (ClientsBannerConfig[clientType].panels.length > 1 && index === 1) ? showLawPractises.current === 'hide' : showLocalAuth.current === 'hide',
      })}
    >
      {(() => { 
        if (props.minimal !== true) {
          return (
          <h4 className='title small-title'>
            {panel.clientType === 'local-authority' ? 'Local Authorities' : 'Law Practises & Solicitors'}
          </h4>
          )
        }
      })()}
      <div className='columns is-tablet'>
        {clientsLogosContent(panel)}
      </div>
    </div>
    );
  });

  return html;
};

const OurClients = (props: OurClientsProps) => {
  const showLocalAuth = useRef<string>('show');
  const showLawPractises = useRef<string>('hide');
  const [show, setShow] = useState<boolean>(false);

  const nextSlide = () => {
    if (showLocalAuth.current === 'show') {
      showLocalAuth.current = 'hide';
      showLawPractises.current = 'show';
    } else if (showLocalAuth.current === 'hide') {
      showLocalAuth.current = 'show';
      showLawPractises.current = 'hide';
    }
    setShow(!show);
  };

  return (
    <div className='columns'>
      <div className='column' style={{position: 'relative'}}>
        {props.minimal ? '' : <h3 className='title large-title'>Our Clients</h3>}
        <div className='content clients-slides'>
          {clientsSlidesContent(props, showLocalAuth, showLawPractises)}
        </div>
        {(() => { 
          if (ClientsBannerConfig[props.clientType].panels.length > 1) {
            return (
              <NextSlideLink
                minimal={props.minimal}
                onClick={() => nextSlide()}>
                <AngleRightIcon icon='angle-right' />
              </NextSlideLink>
            )
          }
        })()}
      </div>
    </div>
  );
};

OurClients.defaultProps = {
  minimal: false,
  clientType: 'default'
};

export default OurClients;
