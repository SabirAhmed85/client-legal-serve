import React from 'react';
import { MetaInfo, OurClients, Card } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import Hero from '../../components/Hero';
import SilverBanner from '../../components/SilverBanner';
import OurPromise from '../../components/OurPromise';

import OurServicesImg from '../../assets/img/court-order-serving-bedford.png';
import ProcessServerImg from '../../assets/img/process-serving-in-bedford.jpg';
import LegalCourierImg from '../../assets/img/legal-courier-bedford.jpg';
import LocalKnowledgeImg from '../../assets/img/local-knowledge-bedford.jpg';

const Home: React.FC = () => (
  <div className='view-wrapper'>
    <MetaInfo {...RoutesConfig.Home.metaInfo} />
    <Hero item='Home' />
    <SilverBanner className='is-hidden-mobile'>
      <OurClients minimal={true} />
    </SilverBanner>
    <section className='container dashboard-content'>
      <div className='columns'>
        <div className='column'>
          <h2 className='title'>Our Services</h2>
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
                <a href="./our-clients/"><strong>Get full details of the kinds of clients we service...</strong></a>
              </div>
              <div className='column is-one-quarter has-text-centered'>
                <img src={OurServicesImg} className='float-right' alt='Legal Support Services, including Court Order serving'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='columns'>
        <div className='column'>
          <Card
            image={{
              src: ProcessServerImg,
              alt: 'Get Process Serving in Bedfordshire and Buckinghamshire'}}
            title={{
              content: 'Local Process Server Bedford',
              className: 'title large-title'}}>
            <p>Our process servers are available to serve all types of Court Orders and legal documents - and we do this in the most secure and professional way possible.</p>
            <p>Click the link below to get a more extensive list of our Process Serving services, which we offer throughout London, Bedford, Buckinghamshire &amp; surrounding areas.</p>
            <a href="our-services/process-server-bedford"><strong>Read more about the types of documents we process...</strong></a>
          </Card>
        </div>
        <hr />
        <div className='column'>
          <Card
            image={{
              src: LegalCourierImg,
              alt: 'Legal Courier Services in London, Bedford & Buckinghamshire'}}
            title={{
              content: 'Legal Courier',
              className: 'title large-title'}}>
            <p>We also offer a range of Legal Courier services to our clients, with a keen focus on Data Protection legislation and best practise at all times.</p>
            <p>With our courier services, you can rest assured that if you require the delivery of your Legal Documents in Bedford, Luton, Buckinghamshire or London, you'll be in the hands of a reliable and safe legal courier at Legal Serve Bedford.</p>
            <a href="our-services/legal-courier-bedford"><strong>Get more details of the Legal Courier services we offer...</strong></a>  
          </Card>
        </div>
        <div className='column'>
          <Card
            image={{
              src: LocalKnowledgeImg,
              alt: 'Local Process Serving in Bedford and Buckinghamshire done with local knowledge'}}
            title={{
              content: 'Court Orders served Locally in London, Bedford & Buckingham',
              size: 'small',
              className: 'title small-title'}}>
            <p>We provide a service covering all parts of London and every town and village Bedfordshire &amp; Buckinghamshire. Our local knowledge serves us well, and can often prove to be the key to a successful serving or delivery.</p>
            <a href="our-services/process-server-bedford"><strong>Find out about our Local Knowledge &amp; Awareness...</strong></a>
          </Card>
        </div>
      </div>
      <hr />
      <div className='columns'>
        <div className='column'>
          <h4 className='title small-title'>Same Day Pick-up, Delivery &amp; Completion</h4>
          <div className='content'>
            <p>We pride ourselves on providing a prompt and efficient service at all times, and in line with this our process servers &amp; legal couriers always offer same-day delivery &amp; completion of service to our clients.</p>
            <a href="our-services/process-server-bedford"><strong>A high-quality & efficient service...</strong></a>
          </div>
        </div>
        <div className='column'>
          <h4 className='title small-title'>Data Protection Compliance</h4>
          <div className='content'>
            <p>As a company with reputable clients in Bedford, Buckinghamshire and London - clients who range from government bodies to Law Firms - our process servers &amp; couriers pride themselves on their professional integrity, particularly when it comes to Data Compliance.</p>
            <a href="our-services/legal-courier-bedford#data-compliance"><strong>Our commitment to Data Protection...</strong></a>
          </div>
        </div>
      </div>
      <OurPromise />
    </section>
  </div>
);

export default Home;
