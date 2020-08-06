import React from 'react';
import { MetaInfo, Hero, OurPromise } from '../components';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OurClients from '../components/OurClients';
import MainContactForm from '../components/MainContactForm';
import styled from 'styled-components';

const StyledCardHeader = styled.div`
  background: #282c34;
  color: #ddd;
  padding: 1rem;
`;

const StyledCardHeaderIcon = styled.figure`
  font-size: 30px;
  width: 100%;
  cursor: default;
`;

const StyledContactIcon = styled(FontAwesomeIcon)`
  background: #282c34;
  color: #ddd;
  font-size: 39px;
  border-radius: 7px;
  padding: 7px;
  margin-right: 25px;
  width: 39px !important;
  height:39px;
`;

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
            <StyledCardHeader className='card-header'>
              <StyledCardHeaderIcon className='card-header-icon is4by3'>
                <FontAwesomeIcon icon='address-book' />
              </StyledCardHeaderIcon>
            </StyledCardHeader>
            <div className='card-content'>
              <h3 className='title large-title'>Additional Contact Info.</h3>
              <hr />
              <div className='content'>
                <p><StyledContactIcon icon='phone'/><strong>Phone</strong>: (01234) 92 48 47</p>
                <p><StyledContactIcon icon='mobile'/><strong>Mobile</strong>: 07853 166 674</p>
                <p><StyledContactIcon icon='at'/><strong>Email</strong>: info@legalservebedford.co.uk</p>
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
