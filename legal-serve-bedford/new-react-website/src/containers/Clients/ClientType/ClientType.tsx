import React from 'react';
import { MetaInfo, OurPromise, Hero, SilverBanner, InlineContactPanel, OurClients } from '../../../components';
import { RoutesConfig } from '../../../config/routes.config';

import ProcessServerImg from '../../../assets/img/process-serving-in-bedford.jpg';
import { useParams } from 'react-router-dom';

const ClientTypesConfig = {
  'bedfordshire-clients': {
    subtitle: 'Our Clients in Bedfordshire',
    clientLogos: [

    ]
  },
  'buckinghamshire-clients': {
    subtitle: 'Our Clients in Buckinghamshire',
    clientLogos: [

    ]
  },
  'cambridgeshire-clients': {
    subtitle: 'Our Clients in Cambridgeshire',
    clientLogos: [

    ]
  },
  'clients-in-surrounding-areas': {
    subtitle: 'Our Clients in surrounding areas',
    clientLogos: [

    ]
  },
  'local-authority-clients': {
    subtitle: 'Our Local Authority clients',
    clientLogos: [

    ]
  },
  'legal-practise-clients': {
    subtitle: 'Our Law Practise clients',
    clientLogos: [

    ]
  }
};

const ClientType: React.FC = () => {
  let { clientType } = useParams();

  return (
    <section className='view-wrapper'>
      <MetaInfo {...RoutesConfig.Clients.metaInfo} />
      <Hero item='ClientType' clientType={clientType} />
      <SilverBanner className='is-hidden-mobile'>
        <OurClients minimal={true} clientType={clientType} />
      </SilverBanner>
      <section className='container dashboard-content'>
        <div className='columns'>
          <div className='column'>
            <h2 className='title'>{ClientTypesConfig[clientType].subtitle}</h2>
            <div className='content'>
              <div className='columns'>
                <div className='column is-three-quarters'>
                  <p>We offer effective process server and legal support services to our clients, which include solicitors, lawyers, government departments &amp; many others in London, Bedfordshire, Buckinghamshire &amp; surrounding regions.</p>
                  <p>Areas we Cover:</p>
                  <ul>
                    <li>London</li>
                    <li>Bedfordshire</li>
                    <li>Buckinghamshire</li>
                    <li>Surrounding Boroughs / Regions</li>
                  </ul>
                  <a href="process-server-bedford.php"><strong>Get full details of the kinds of clients we service...</strong></a>
                </div>
                <div className='column is-one-quarter has-text-centered'>
                  <img src={ProcessServerImg} className='float-right' alt='Legal Support Services, including Court Order serving'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <OurPromise />
        <InlineContactPanel />
      </section>
    </section>
  );
};

export default ClientType;
