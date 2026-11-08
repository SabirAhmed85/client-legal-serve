import styled from 'styled-components';

const StyledLink = styled.a`
  user-select: none;
  color: white;
  letter-spacing: 0.01em;
  background-color: transparent;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease-out, border-bottom-color 0.2s ease-out;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  height: 100%;
  padding: 0.5rem 0.75rem;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;

  :hover {
    cursor: pointer;
    color: #61dafb;
    background-color: transparent;
  }
`;

export { StyledLink };
