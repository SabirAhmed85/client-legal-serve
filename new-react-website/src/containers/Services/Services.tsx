import React from 'react';
import { MetaInfo, OurPromise } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import Hero from '../../components/Hero';

import ProcessServerImg from '../../assets/img/process-serving-in-bedford.jpg';
import LegalCourierImg from '../../assets/img/legal-courier-bedford.jpg';
import OurClients from '../../components/OurClients';

const Services: React.FC = () => (
  <section className='view-wrapper'>
    <MetaInfo {...RoutesConfig.Services.metaInfo} />
    <Hero item='Services' />
    <section className='container dashboard-content'>
      <div className='columns'>
        <div className='column'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is4by3'>
                <img src={ProcessServerImg} alt='Get Process Serving in Bedfordshire and Buckinghamshire'/>
              </figure>
            </div>
            <div className='card-content'>
              <h3 className='title large-title'>Local Process Server Bedford</h3>
              <div className='content'>
                <p>Our process servers are available to serve all types of Court Orders and legal documents - and we do this in the most secure and professional way possible.</p>
                <p>Click the link below to get a more extensive list of our Process Serving services, which we offer throughout London, Bedford, Buckinghamshire &amp; surrounding areas.</p>
                <a href="process-server-bedford.php"><strong>Read more about the types of documents we process...</strong></a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='column'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is4by3'>
                <img src={LegalCourierImg} alt='Legal Courier Services in London, Bedford & Buckinghamshire'/>
              </figure>
            </div>
            <div className='card-content'>
              <h3 className='title large-title'>Legal Courier</h3>
              <div className='content'>
                <p>We also offer a range of Legal Courier services to our clients, with a keen focus on Data Protection legislation and best practise at all times.</p>
                <p>With our courier services, you can rest assured that if you require the delivery of your Legal Documents in Bedford, Luton, Buckinghamshire or London, you'll be in the hands of a reliable and safe legal courier at Legal Serve Bedford.</p>
                <a href="legal-courier-bedford.php"><strong>Get more details of the Legal Courier services we offer...</strong></a>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <OurClients />
      <OurPromise />
    </section>
  </section>
);

export default Services;
