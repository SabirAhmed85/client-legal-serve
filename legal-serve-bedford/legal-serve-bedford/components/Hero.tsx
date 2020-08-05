import React, { useMemo } from 'react';
import ServiceList from './ServiceList';
import { ServiceInfo, ServiceInfoConfig } from '../config/services.config';

export interface HeroProps {
  item: string;
  clientType?: string;
};

const Hero = (props: HeroProps) => {
  const HeroProps = {
    Home: {
      title: 'Welcome to Legal Serve, local Process Servers and Legal Couriers in Bedfordshire, Buckinghamshire & Cambridgeshire.'
    },
    Services: {
      title: 'Our Services in Legal Support',
      summary: 'Read more about the services we offer around process and court-order serving and legal couriering'
    },
      ProcessServerBedford: {
        title: 'Process Serving in Beds, Bucks & surrounding areas',
        summary: 'Find out more about the services we offer in the Bedfordshire and Buckinghamshire counties.'
      },
      LegalCourierBedford: {
        title: 'Legal Courier Bedford, Buckinghamshire & Cambridgeshire.',
        summary: 'Our legal couriers are very familiar with the Bedfordshire and Buckinghamshire counties, as well as data-compliance regulations and guidelines.'
      },
    Contact: {
      title: 'Contact Legal Serve Bedford to arrange your next Serving or Delivery',
      summary: 'Contact Legal Serve to discuss your legal support needs or to better understand our delivery'
    },
    Clients: {
      title: 'Our Clients',
      summary: 'Ranging from Bedfordshire & Buckinghamshire to Cambridgeshire, our clients trust us to deliver'
    },
    ClientType: {
      'bedfordshire-clients': {
        title: 'Bedfordshire Clients',
        summary: 'Read about some of our Bedfordshire clients'
      },
      'buckinghamshire-clients': {
        title: 'Buckinghamshire Clients',
        summary: 'Read about some of our Milton Keynes & Buckinghamshire-based clients'
      },
      'cambridgeshire-clients': {
        title: 'Cambridgeshire Clients',
        summary: 'Read about some of our Cambridgeshire-based clients'
      },
      'clients-in-surrounding-areas': {
        title: 'Clients in Surrounding Areas',
        summary: 'Read about some of our clients in surrounding areas'
      },
      'local-authority-clients': {
        title: 'Local Authority Clients',
        summary: 'Read about some of our Local Authority clients'
      },
      'legal-practise-clients': {
        title: 'Legal Practise Clients',
        summary: 'Read about some of our Legal Practise clients'
      }
    }
  };
  const serviceList = useMemo<ServiceInfo[]>(() => {
    return Object.keys(ServiceInfoConfig).map((key) => ServiceInfoConfig[key]);
  }, []);

  function renderHeroContent(item) {
    switch(item) {
      case 'Home':
        return (
          <div className='columns'>
            <div className='column'>
              <div className='is-flex is-horizontal-center'>
                <iframe title='Process Serving Information Video' width='650' height='400' src='https://www.youtube.com/embed/vHvd6HaPq_s' frameBorder='0' allowFullScreen></iframe>
              </div>
            </div>
            <div className='column'>
              <ServiceList serviceList={serviceList} />
            </div>
          </div>
        );
      case 'ClientType':
        return (
          <p>{HeroProps[props.item][props.clientType].summary}</p>
        )
      default:
        return (
          <p>{HeroProps[props.item].summary}</p>
        );
    };
  }
  const heroContent = renderHeroContent(props.item);

  return (
    <section className='hero is-dark'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title blog-title'>
          {props.item !== 'ClientType' ?
            HeroProps[props.item].title :
            HeroProps[props.item][props.clientType].title}
          <hr />
          </h1>
          {heroContent}
        </div>
      </div>
    </section>
  );
};

export default Hero;
