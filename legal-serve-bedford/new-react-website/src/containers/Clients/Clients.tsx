import React from 'react';
import { MetaInfo, OurPromise, InlineContactPanel, OurClients } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import Hero from '../../components/Hero';

import ProcessServerImg from '../../assets/img/process-serving-in-bedford.jpg';
import LegalCourierImg from '../../assets/img/legal-courier-bedford.jpg';

const Clients: React.FC = () => (
  <section className='view-wrapper'>
    <MetaInfo {...RoutesConfig.Clients.metaInfo} />
    <Hero item='Clients' />
    <section className='container dashboard-content'>
      <div className='columns'>
        <div className='column'>
          <div className='card'>
            <div className='card-content'>
              <h4 className='subtitle'>Bedfordshire</h4>
              <div className='content'>
                <p>With our origins in Bedfordshire, so too are the bulk of our clients, and this makes us the best choice for any serving in the region.</p>
                <a href="process-server-bedford.php"><strong>Some of our Bedfordshire clients...</strong></a>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card'>
            <div className='card-content'>
              <h4 className='subtitle'>Buckinghamshire</h4>
              <div className='content'>
                <p>We've been working in Buckinghamshire for many years and have built up much local knowledge.</p>
                <a href="process-server-bedford.php"><strong>Some of our Buckinghamshire-based clients...</strong></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className='column'>
          <div className='card card-dark'>
            <div className='card-content'>
              <h4 className='subtitle'>Local Authorities</h4>
              <div className='content'>
                <p>We've worked with a wide range of Local Authorities in the past and we continue to do so, with diligence and strong procedures.</p>
                <a href="process-server-bedford.php"><strong>Read more...</strong></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          <div className='card'>
            <div className='card-content'>
              <h4 className='subtitle'>Cambridgeshire</h4>
              <div className='content'>
                <p>As a neighbouring region, Cambridgeshire is one which we know very well.</p>
                <a href="legal-courier-bedford.php"><strong>Some of our Cambridgeshire clients...</strong></a>  
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card'>
            <div className='card-content'>
              <h4 className='subtitle'>Surrounding Areas</h4>
              <div className='content'>
                <p>We've served in many surrounding areas for a wide range of clients.</p>
                <a href="legal-courier-bedford.php"><strong>Our clients from surrounding areas...</strong></a>  
              </div>
            </div>
          </div>
        </div>
        
        <div className='column'>
          <div className='card card-dark'>
            <div className='card-content'>
              <h4 className='subtitle'>Legal Practises</h4>
              <div className='content'>
                <p>Having served and delivered on behalf of many legal practises, we understand the importance of efficiency and timeliness.</p>
                <a href="process-server-bedford.php"><strong>Read more...</strong></a>
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

export default Clients;
