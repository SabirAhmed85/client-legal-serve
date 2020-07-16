import { createGlobalStyle } from 'styled-components';

import JosefinSans from './JosefinSans-Italic-VariableFont_wght.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'),
        url(${JosefinSans}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;