import styled from 'styled-components';
import device from '../../config/device.config';

const SilverBannerOuter = styled.div`
  background: #F9F9F9;
  border-bottom: 1px solid #f3f3f3;
  padding: 25px 0 0;
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

export { SilverBannerOuter, SilverBannerInner };
