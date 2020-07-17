import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const LeftMenuBox = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .menu-icon {
    min-width: 14px;
    margin-right: 7px;
  }

  .menu-item {
    a {
      font-family: 'Josefin Sans', sans-serif;
      font-size: ${themeGet('fontSizes.2', '15')}px;
      color: ${themeGet('colors.light', '#af977f')};
      line-height: 1.2em;
      display: block;
      transition: 0.15s ease-in-out;
      display: flex;
      align-items: center;
      width: 150px;
      height: 80px;
      border-bottom: 2px solid #31080c;

      @media (max-width: 1400px) {
        font-size: 15px;
      }
      &:hover {
        color: ${themeGet('colors.light', '#fff')};
        border-bottom: 2px solid #ddd;
      }
      &.current-page {
        color: ${themeGet('colors.light', '#fff')};
      }
    }
  }

  .user-pages-dropdown {
    .popover-handler {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: block;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .popover-content {
      .inner-wrap {
        /* padding: ; */
      }
    }
  }
`;
