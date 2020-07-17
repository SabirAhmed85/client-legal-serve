import React from 'react';
import styled from 'styled-components';
import device from '../config/device.config';

// 'styled-components' specific to SilverBanner.tsx component
const SilverBannerOuter = styled.div`
  background: #F9F9F9;
  border-bottom: 1px solid #f3f3f3;
  padding: 20px 0 0;
`;

const SilverBannerInner = styled.div`
  margin: 0 auto;

  @media ${device.laptop} {
    max-width: 960px;
  }

  @media ${device.laptopL} {
    max-width: 1152px;
  }

  @media ${device.laptopXL} {
    max-width: 1344px;
  }
`;

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
