import React from 'react';
import { MetaInfo, Hero, OurPromise } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OurClients from '../../components/OurClients';
import MainContactForm from '../../components/MainContactForm';

const ContactLegalServe: React.FC = () => (
  <section className='view-wrapper'>
    <MetaInfo {...RoutesConfig.Contact.metaInfo} />
    <Hero item='Contact'/>
    <section className='container dashboard-content'>
      <div className='columns'>
        <div className='column'>
          <div className='card'>
            <div className='card-content'>
              <h3 className='title large-title'>Contact Us Now</h3>
              <div className='content'>
                <MainContactForm />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='column'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is4by3'>
                <FontAwesomeIcon icon='check' />
              </figure>
            </div>
            <div className='card-content'>
              <h3 className='title large-title'>Additional Contact Info.</h3>
              <hr />
              <div className='content'>
                <p><strong>Phone</strong>: (01234) 92 48 47</p>
                <p><strong>Mobile</strong>: 07853 166 674</p>
                <p><strong>Email</strong>: info@legalservebedford.co.uk</p>
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

export default ContactLegalServe;
