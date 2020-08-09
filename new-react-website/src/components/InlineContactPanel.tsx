import React from 'react';
import MainContactForm from './MainContactForm';

const InlineContactPanel = () => (
  <div>
    <h3 className='title'>Contact Us Today</h3>
    <div className='columns'>
      <div className='column'>
        <MainContactForm />
      </div>
      <div className='column'>
        <div className='card'>
          <div className='card-content'>
            <h5 className='small-title'><strong>Or alternatively, you can contact us directly using any of the below methods:</strong></h5>
            <hr />
            <p><strong>Phone</strong>: (01234) 92 48 47</p>
            <br />
            <p><strong>Mobile</strong>: 07853 166 674</p>
            <br />
            <p><strong>Email</strong>: info@legalservebedford.co.uk</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InlineContactPanel;
