import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const BurgerMenu = styled.button.attrs(() => ({
  role: 'button',
  'aria-label': 'Menu'
}))`
  border:none;
  background: none;
  width: 3.5rem;
  height: 3.5rem;
  margin-left: -1rem;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.4s ease, bottom 0.4s ease;
`;

const BurgerMenuIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.75em;
`;

export { BurgerMenu, BurgerMenuIcon };
