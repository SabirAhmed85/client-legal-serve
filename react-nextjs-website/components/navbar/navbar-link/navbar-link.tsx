import React from 'react';
import Link from 'next/link';

import { StyledLink } from './navbar-link.style';

type NavBarLinkProps = {
  path: string;
  displayName: string;
  footerBar?: boolean;
  lastLink?: boolean;
  isHiddenMobile?: boolean;
};

const NavBarLink: React.FC<NavBarLinkProps> = ({
  path,
  displayName,
  footerBar,
  lastLink,
  isHiddenMobile
}) => (
  <>
    <Link
      href={path}
      passHref
    >
      <StyledLink
        className={`${(isHiddenMobile) ? 'is-hidden-mobile' : ''}`}>
        {displayName}
      </StyledLink>
    </Link>
    {(() => { 
      if (!footerBar && !lastLink) {
        return (
          <div className='seperator' />
        )
      }
    })()}
  </>
);

export default NavBarLink;
