import React from 'react';

import { SilverBannerOuter, SilverBannerInner } from './silver-banner.style';

const SilverBanner = (props) => {

  return (
    <SilverBannerOuter className={props.className}>
      <SilverBannerInner>
        {props.children}
      </SilverBannerInner>
    </SilverBannerOuter>
  );
};

export default SilverBanner;
