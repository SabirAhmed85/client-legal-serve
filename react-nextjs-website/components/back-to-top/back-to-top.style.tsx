import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackToTopLink = styled.a.attrs(() => ({
  role: 'button',
  'aria-label': 'BackToTop'
}))`
  width: 3.5rem;
  z-index: 9999;
  display: block;
  height: 3.5rem;
  right: 6.25rem;
  cursor: pointer;
  position: fixed;
  user-select: none;
  border-radius: 50%;
  -webkit-touch-callout: none;
  background: rgb(37, 40, 47);
  -webkit-tap-highlight-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
  transition: opacity 0.4s ease, bottom 0.4s ease;
  bottom: ${(props: {show: boolean}) => props.show ? '24px' : '-3.5rem'};
  opacity: ${(props: {show: boolean}) => props.show ? 1 : 0};
`;

const AngleDoubleUpIcon = styled(FontAwesomeIcon)`
  display: block;
  color: #61dafb;
  font-size: 1.75em;
  padding-left: 0.1rem;
  margin: 0.75rem auto auto auto;
`;

export { BackToTopLink, AngleDoubleUpIcon };