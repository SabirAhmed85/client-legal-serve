import React from 'react';
import { MetaInfo, OurPromise, InlineContactPanel, OurClients, Card, Hero } from '../../components';
import { RoutesConfig } from '../../config/routes.config';

const OurServicesImg = '/img/legal-courier-bedford.jpg';
const DataComplianceImg = '/img/data-compliance.jpg';

const LegalCourierBedford: React.FC = () => (
  <section className='view-wrapper'>
    <MetaInfo {...RoutesConfig.Services.metaInfo} />
    <Hero item='LegalCourierBedford' />
    <section className='container dashboard-content'>
      <div className='columns'>
        <div className='column'>
          <Card
            horizontal
            image={{
              src: OurServicesImg,
              alt: 'Legal Support Services, including Court Order serving'}}
            title={{
              content: 'Our Services as a Legal Courier',
              className: 'title large-title'}}>
            <p>As a provider of efficient and reliable Legal Courier services, we are able to not only offer fast service, but one which is also reliable and based on strong knowledge of the local areas which our couriers service.</p>
            <p>Not only are our legal couriers trained to deal professionaly and accurately with all relevant paperwork and administration, but the logistics of our legal courier assigments are always well planned.</p>
            <p>We offer fast delivery and effective legal courier services to our clients, which include solicitors, lawayers, councils, government departments, corporate companies, charities, insurance companies and private individuals in Bedfordshire &amp; Buckinghamshire.</p>
          </Card>
          {/*
          <div className='card is-horizontal'>
            <div className='card-image'>
              <figure className='image is4by3'>
                <img src={OurServicesImg} alt='Legal Support Services, including Court Order serving'/>
              </figure>
            </div>
            <div className='card-content'>
              <h3 className='title large-title'>Our Services as a Legal Courier</h3>
              <div className='content'>
                <p>As a provider of efficient and reliable Legal Courier services, we are able to not only offer fast service, but one which is also reliable and based on strong knowledge of the local areas which our couriers service.</p>
                <p>Not only are our legal couriers trained to deal professionaly and accurately with all relevant paperwork and administration, but the logistics of our legal courier assigments are always well planned.</p>
                <p>We offer fast delivery and effective legal courier services to our clients, which include solicitors, lawayers, councils, government departments, corporate companies, charities, insurance companies and private individuals in Bedfordshire &amp; Buckinghamshire.</p>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          <Card
            horizontal
            image={{
              src: DataComplianceImg,
              alt: 'Data compliance &amp; privacy'}}
            title={{
              content: 'Data Compliance',
              className: 'title large-title'}}>
            <p>Our legal couriers appreciate and understand the important of regulation, particularly Data Compliance Regaultion.</p>
            <p>As well as this, we also provide courier services to reputable organisation around Bedford &amp; Buckingham, which means we take compliance with data-protection legislation very seriously.</p>
          </Card>
        </div>
      </div>
      <hr />
      <OurClients />
      <OurPromise />
      <InlineContactPanel />
    </section>
  </section>
);

export default LegalCourierBedford;
