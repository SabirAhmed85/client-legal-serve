import React from 'react';
import Parser from 'html-react-parser';
import { MetaInfo, OurPromise, Hero, SilverBanner, InlineContactPanel, OurClients } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import ClientTypesConfig from '../../config/client-type.config';

const ProcessServerImg = '/img/process-serving-in-bedford.jpg';

function Client({clientType}) {
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

export default Client;

export async function getStaticPaths() {
  return {
    paths: Object.keys(ClientTypesConfig).map(key => {
      return {
        params: {
          type: key
        }
      }
    }),
    fallback: false
  };
};

export async function getStaticProps({ params }) {
  const clientType = params.type;
  return {
    props: {
      clientType
    }
  }
};
