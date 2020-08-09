import React, { useEffect, useState, useRef } from 'react';
import Scroll from 'react-scroll';

import { BackToTopLink, AngleDoubleUpIcon } from './back-to-top.style';

// 'react-scroll' configuration
const scroll = Scroll.animateScroll;

const scrollOptions = {
  delay: 5,
  duration: 500,
  smooth: 'easeInOutCubic'
};

// Write the show state value to a ref so we can use it as a check to prevent
// ...re-renders on every scroll down that triggers a show for the button
const BackToTop: React.FC = () => {
  const showRef = useRef<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!showRef.current && (window.scrollY || window.pageYOffset) > 100) {
        showRef.current = true;
        setShow(true);
      } else if ((window.scrollY || window.pageYOffset) === 0) {
        showRef.current = false;
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BackToTopLink
      show={show}
      onClick={() => scroll.scrollToTop(scrollOptions)}
    >
      <AngleDoubleUpIcon icon='angle-double-up' />
    </BackToTopLink>
  );
};

export default BackToTop;
