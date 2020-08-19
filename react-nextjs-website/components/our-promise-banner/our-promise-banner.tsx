import React from 'react';

import { StyledPromiseTickIcon } from './our-promise-banner.style';

const OurPromise = () => (
  <div className='columns'>
    <div className='column'>
      <div className='card our-promise'>
        <div className='card-content'>
          <h2 className='title'>Our Promise to Our Clients</h2>
          <div className='content'>
            <div className='columns'>
              <div className='column'>
                <p><StyledPromiseTickIcon icon='check' />To serve your documents promptly and in accordance with all CPR rules.</p>
              </div>
              <div className='column'>
                <p><StyledPromiseTickIcon icon='check' />To serve the papers in according with your special instructions.</p>
              </div>
            </div>
            <div className='columns'>
              <div className='column'>
                <p><StyledPromiseTickIcon icon='check' />To ensure all Data Protection and Human Rights legislation is adhered to.</p>
              </div>
              <div className='column'>
                <p><StyledPromiseTickIcon icon='check' />To keep you updated and advise you when service has been completed.</p>
              </div>
            </div>
            <div className='columns'>
              <div className='column'>
                <p><StyledPromiseTickIcon icon='check' />To monitor all cases we are dealing with and ensure they are returned to you on time.</p>
              </div>
              <div className='column'>
                <p><StyledPromiseTickIcon icon='check' />To ensure that all statements or affadavits are completed correctly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurPromise;
