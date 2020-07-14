import React, { useMemo } from 'react';
import { ServiceList } from '../containers/Home/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ServiceInfo, ServiceInfoConfig } from '../config/services.config';

export interface HeroProps {
  item: string;
};

const Hero = (props: HeroProps) => {
  const HeroProps = {
    Home: {
      title: 'Welcome to Legal Serve, local Process Servers and Legal Couriers in Bedfordshire & Buckinghamshire.'
    },
    Services: {
      title: 'Our Services in Legal Support',
      summary: 'Read more about the services we offer around process and court-order serving and legal couriering'
    },
    Contact: {
      title: 'Contact Legal Serve Bedford to arrange your next Serving or Delivery',
      summary: 'Contact Legal Serve to discuss your legal support needs or to better understand our delivery'
    }
  };
  const serviceList = useMemo<ServiceInfo[]>(() => {
    return Object.keys(ServiceInfoConfig).map((key) => ServiceInfoConfig[key]);
  }, []);

  const heroContent = (props.item === 'Home') ?
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
  : <p>{HeroProps[props.item].summary}</p>;

  return (
    <section className='hero is-dark'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title blog-title'>{HeroProps[props.item].title}</h1>
          <hr />
          {heroContent}
        </div>
      </div>
    </section>
  );
};

export default Hero;
