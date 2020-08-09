import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import device from '../../config/device.config';

// types
type OurClientsProps = {
  minimal?: boolean;
  clientType?: string;
};

const StyledColumn = styled.div`
  padding: 0 2em;
`;

const NextSlideLink = styled.a.attrs(() => ({
  role: 'button',
  'aria-label': 'Next'
}))`
  width: 3.5rem;
  display: block;
  height: 3.5rem;
  right: 1.25rem;
  cursor: pointer;
  position: absolute;
  user-select: none;
  border-radius: 50%;
  -webkit-touch-callout: none;
  background: rgb(37, 40, 47);
  -webkit-tap-highlight-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
  transition: opacity 0.4s ease, bottom 0.4s ease;
  top: ${(props: OurClientsProps) => props.minimal ? '10%' : '18%'};
  opacity: 0.5;

  @media ${device.tablet} {
    top: ${(props: OurClientsProps) => props.minimal ? '28%' : '52%'};
  }
`;

const AngleRightIcon = styled(FontAwesomeIcon)`
  display: block;
  color: #fff;
  font-size: 1.75em;
  padding-left: 0.1rem;
  margin: 0.75rem auto auto auto;
`;

export { StyledColumn, NextSlideLink, AngleRightIcon };
