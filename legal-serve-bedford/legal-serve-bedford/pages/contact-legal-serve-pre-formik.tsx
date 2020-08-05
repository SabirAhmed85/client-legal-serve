import React from 'react';
import { MetaInfo, Hero, OurPromise } from '../../components';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OurClients from '../components/OurClients';
import styled from 'styled-components';

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

type Props = {};
const InitialContactFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  errors: {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
};
type State = typeof InitialContactFormState;

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class ContactLegalServe extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = InitialContactFormState;
  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.value, event.target.name);
    // const [name, value] = event.target;
    let { name, value } = event.target; 
    const newState = { [name]: value } as Pick<State, keyof State>;
    let errors = this.state.errors;

    switch(name) {
      case 'name':
        errors.name = 
          value.length < 5
            ? 'Name must be 5 characters long.'
            : '';
        break;
      case 'email':
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid.';
        break;
      case 'phone':
        errors.phone = 
          value.length < 5
            ? 'Name must be 5 characters long.'
            : '';
        break;
      case 'message':
        errors.message = 
          value.length < 1
            ? 'Please fill in a Message.'
            : '';
        break;
      default:
        break;
    }
    
    console.log(newState);
    this.setState(newState);
    console.log(this.state);
  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val: any) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    if(this.validateForm(this.state.errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }

  render() {
    return (
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
                    <form id='contact-form' onSubmit={this.onSubmit.bind(this)} method='GET'>
                      <div className='field'>
                        <div className='control has-icons-left has-icons-right'>
                          <input type='text'
                            className='input name'
                            placeholder='Your Name'
                            value={this.state.name}
                            name='name'
                            onChange={this.handleChange.bind(this)}/>
                          <span className="icon is-small is-left">
                            <FontAwesomeIcon icon='user' />
                          </span>
                        </div>
                      </div>
                      <div className='field'>
                        <div className='control has-icons-left has-icons-right'>
                          <input type='email'
                            className='input email'
                            placeholder='E-mail Address'
                            aria-describedby='emailHelp'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)} />
                          <span className="icon is-small is-left">
                            <FontAwesomeIcon icon='at' />
                          </span>
                        </div>
                      </div>
                      <div className='field'>
                        <div className='control has-icons-left has-icons-right'>
                          <input type='phone'
                            className='input'
                            placeholder='Phone Number'
                            aria-describedby='phoneHelp'
                            name='phone'
                            value={this.state.phone}
                            onChange={this.handleChange.bind(this)} />
                          <span className="icon is-small is-left">
                            <FontAwesomeIcon icon='phone' />
                          </span>
                        </div>
                      </div>
                      <div className='field'>
                        <div className='control has-icons-left has-icons-right'>
                          <textarea
                            className='textarea'
                            placeholder='Your Message'
                            name='message'
                            value={this.state.message}
                            onChange={this.handleChange.bind(this)}></textarea>
                        </div>
                      </div>
                      <div className='field'>
                        <div className='control'>
                          <button type='submit' className='button is-primary is-right'>Submit</button>
                        </div>
                      </div>
                    </form>
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
  }
};

export default ContactLegalServe;
