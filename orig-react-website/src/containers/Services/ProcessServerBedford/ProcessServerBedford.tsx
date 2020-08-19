import React from 'react';
import { MetaInfo, OurPromise, InlineContactPanel, OurClients } from '../../../components';
import { RoutesConfig } from '../../../config/routes.config';
import Hero from '../../../components/Hero';

import CourtOrderServingImg from '../../../assets/img/court-order-serving.jpg';
import LocalKnowledgeImg from '../../../assets/img/local-knowledge-bedford.jpg';
import ProcessServingImg from '../../../assets/img/process-serving-in-bedford.jpg';

const ProcessServerBedford: React.FC = () => (
  <section className='view-wrapper'>
    <MetaInfo {...RoutesConfig.Services.metaInfo} />
    <Hero item='ProcessServerBedford' />
    <section className='container dashboard-content'>
      <div className='columns'>
        <div className='column'>
          <div className='card is-horizontal'>
            <div className='card-image'>
              <figure className='image is4by3'>
                <img src={CourtOrderServingImg} alt='Get Process Serving in Bedfordshire and Buckinghamshire'/>
              </figure>
            </div>
            <div className='card-content'>
              <h3 className='title large-title'>Our Services</h3>
              <div className='content'>
                <p>We are a process serving company based in Bedfordshire (Bedford) &amp; Buckinghamshire, providing local process serving to anyone who requires a Court Order or Legal Document serving.</p>
                <p>We offer fast delivery and effective legal support services to our clients, which include solicitors, lawayers, councils, government departments, corporate companies, charities, insurance companies and private individuals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          <div className='card is-horizontal'>
            <div className='card-image'>
              <figure className='image is4by3'>
                <img src={LocalKnowledgeImg} alt='Legal Courier Services in London, Bedford & Buckinghamshire'/>
              </figure>
            </div>
            <div className='card-content'>
              <h3 className='title large-title'>Court Orders served in Bedford, Cambridge &amp; Buckingham</h3>
              <div className='content'>
                <p>We provide a process service covering every town and village in Bedfordshire, Buckinghamshire &amp; Cambridgeshire.</p>
                <p>Our strong local awareness and knowledge of areas in and around Bedford, Buckingham &amp; Cambridge means our service is fast and efficient.</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          <div className='card is-horizontal'>
            <div className='card-image'>
              <figure className='image is4by3'>
                <img src={ProcessServingImg} alt='Legal Courier Services in London, Bedford & Buckinghamshire'/>
              </figure>
            </div>
            <div className='card-content'>
              <h3 className='title large-title'>Local Process Serving</h3>
              <div className='content'>
                <p>We provide process serving of all types of Court Orders and legal documents, which include Court Orders, statutory demands, bankrupty &amp; winding-up petitions, claim forms, divorce petitions, eviction notices, writs, citations &amp; summons, divorce petitions, family &amp; children's proceedings, injunction orders, tenant &amp; landlord lease break notices etc. </p>
                <p>We will make multiple visits to an address if neccessary. We have process servers who will make sure your court papers are served as quickly as possible with proof of service returned to you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <OurClients />
      <OurPromise />
      <InlineContactPanel />
    </section>
  </section>
);

export default ProcessServerBedford;
