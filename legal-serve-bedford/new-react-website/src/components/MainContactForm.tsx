import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validPhoneRegex = RegExp(/^[0-9 ]{11,}$/i);

const contactFormValidationSchema = Yup.object({
  Name: Yup.string().min(5).required('Please provide your Full Name.'),
  Company: Yup.string().min(2),
  Email: Yup.string().email().matches(validEmailRegex, 'Please enter a valid E-mail Address').required('Please provide your E-mail Address.'),
  Phone: Yup.string().matches(validPhoneRegex, 'Please enter a valid Phone Number'),
  Message: Yup.string().required('Please fill in a Message.')
});

const getSubmitCallback = () =>
  values => {
    axios({
      method: 'POST',
      url: 'http://legalservebedford.co.uk/new/contact-process.php?action=processContact',
      data: JSON.stringify(values)
    }).then((response) => {
      console.log(response.data);
      if (response.data.status === '\"Success\"'){
        alert("Message Sent.");
      } else {
        console.log(response);
        alert("Message failed to send.")
      }
    });
  };

const MainContactForm = () => {
  const FormikError = error => (
    <p className='help is-danger'>{error.children}</p>
  );

  const contactFormInitialValues = {
    Name: '',
    Company: '',
    Email: '',
    Phone: '',
    Message: ''
  };

  const onSubmit = React.useCallback(getSubmitCallback(), []);

  return (
    <Formik
      initialValues={contactFormInitialValues}
      validationSchema={contactFormValidationSchema}
      onSubmit={onSubmit}>
      {({ handleSubmit, values, errors, touched }) => (
      <Form id='contact-form' onSubmit={handleSubmit} method='GET'>
        <div className='field'>
          <div className='control has-icons-left has-icons-right'>
            <Field type='text'
              className={`input ${
                touched.Name && errors.Name ? 'is-danger' : ''                                
              } ${
                touched.Name && !errors.Name ? 'is-success' : ''
              }`}
              placeholder='Your Name'
              name='Name'
              />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon='user' />
            </span>
          </div>
          <ErrorMessage component={FormikError}
            name='Name' />
        </div>
        <div className='field'>
          <div className='control has-icons-left has-icons-right'>
            <Field type='text'
              className={`input ${
                touched.Company && errors.Company ? 'is-danger' : ''                                
              } ${
                touched.Company && !errors.Company ? 'is-success' : ''
              }`}
              placeholder='Company / Organisation'
              name='Company' />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon='at' />
            </span>
          </div>
          <ErrorMessage component={FormikError}
            name='Company' />
        </div>
        <div className='field'>
          <div className='control has-icons-left has-icons-right'>
            <Field type='email'
              className={`input ${
                touched.Email && errors.Email ? 'is-danger' : ''                                
              } ${
                touched.Email && !errors.Email ? 'is-success' : ''
              }`}
              placeholder='E-mail Address'
              aria-describedby='emailHelp'
              name='Email' />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon='at' />
            </span>
          </div>
          <ErrorMessage component={FormikError}
            name='Email' />
        </div>
        <div className='field'>
          <div className='control has-icons-left has-icons-right'>
            <Field type='Phone'
              className={`input ${
                touched.Phone && errors.Phone ? 'is-danger' : ''                                
              } ${
                touched.Phone && !errors.Phone ? 'is-success' : ''
              }`}
              placeholder='Phone Number'
              aria-describedby='phoneHelp'
              name='Phone' />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon='phone' />
            </span>
          </div>
          <ErrorMessage component={FormikError}
            name='Phone' />
        </div>
        <div className='field'>
          <div className='control has-icons-left has-icons-right'>
            <Field
              component='textarea'
              className={`textarea ${
                touched.Message && errors.Message ? 'is-danger' : ''                                
              } ${
                touched.Message && !errors.Message ? 'is-success' : ''
              }`}
              placeholder='Your Message'
              name='Message' />
          </div>
          <ErrorMessage component={FormikError}
            name='Message' />
        </div>
        <div className='field buttons is-right'>
          <div className='control'>
            <button type='submit' className='button is-primary'>Submit</button>
          </div>
        </div>
      </Form>
      )}
    </Formik>
  );
};

export default MainContactForm;
