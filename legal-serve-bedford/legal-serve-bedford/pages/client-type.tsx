import React from 'react';
import { useParams } from 'react-router-dom';
import Parser from 'html-react-parser';
import { MetaInfo, OurPromise, Hero, SilverBanner, InlineContactPanel, OurClients } from '../../../components';
import { RoutesConfig } from '../../config/routes.config';

import ProcessServerImg from '../../assets/img/process-serving-in-bedford.jpg';

const ClientTypesConfig = {
  'bedfordshire-clients': {
    subtitle: 'Our Clients in Bedfordshire',
    content: `
      <p>Being that Legal Serve is based in Bedfordshire, we have always shared a strong relationship with our Bedford clients.</p>
      <p>Having worked closely with the Bedford Borough Council, as well as private legal practises such as Fullers Solicitors, we are well in tune with the various ways of working adopted by local authorities and private firms.</p>
    `
  },
  'buckinghamshire-clients': {
    subtitle: 'Our Clients in Buckinghamshire',
    content: `
      <p>Our clients in Buckinghamshire are primarily centered around Milton Keynes itself.</p>
      <p>The expansion of our services into Buckinghamshire was always a natural one, being the Buckinghamshire is a neighbouring region of our native Bedfordshire.</p>
      <p>We now offer a range of services to our Milton Keynes & Buckinghamshire-based clients, which range from Local Authorities to private legal practises.</p>
    `
  },
  'cambridgeshire-clients': {
    subtitle: 'Our Clients in Cambridgeshire',
    content: `
      <p>Our Cambridgeshire clients are predominantly based in the city of Cambridge itself, with the majority being private legal practises.</p>
      <p>Our existing local knowledge of the geography of Cambridgeshire has been a vital part of our success in the region, and is part of the reason our clients here choose us for their process serving and legal couriering needs.</p>
    `
  },
  'clients-in-surrounding-areas': {
    subtitle: 'Our Clients in surrounding areas',
    content: `
      <p>Legal Serve is proud to be able to say that it has provided services to clients from areas as far apart as Bolton, Warrington and Manchester.</p>
      <p>our flexibility has always made us a well-prepared and agile provider of Process Serving and Legal Courier services, in many parts of the country.</p>
    `
  },
  'local-authority-clients': {
    subtitle: 'Our Local Authority clients',
    content: `
      <p>Legal Serve have worked with Local Authorities that range from Bedford to as far as Wales (Powys) and Bolton.</p>
      <p>As a reputable process server and legal courier, we have always made it a priority to work to the most diligent of standards when performing our duties, particularly when it comes to data protection and confidentiality.</p>
      <p>In the past, our Local Authority clients have trusted us to facilitate and cater to a wide range of needs and requirements, including Court Orders.</p>
    `
  },
  'legal-practise-clients': {
    subtitle: 'Our Law Practise clients',
    content: `
      <p>We offer effective process server and legal support services to our clients, which include solicitors, lawyers, government departments &amp; many others in London, Bedfordshire, Buckinghamshire &amp; surrounding regions.</p>
      <p>Areas we Cover:</p>
      <ul>
        <li>London</li>
        <li>Bedfordshire</li>
        <li>Buckinghamshire</li>
        <li>Surrounding Boroughs / Regions</li>
      </ul>
    `
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
                  {Parser(ClientTypesConfig[clientType].content)}
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
