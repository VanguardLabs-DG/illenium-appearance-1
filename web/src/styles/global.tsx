import { createGlobalStyle } from 'styled-components';
import nexafont from '../fonts/Nexa-Book.ttf';
import { getPreviewBodyBackgroundCss } from './previewBackground';

const isDev = !import.meta.env.PROD;
const { dev: previewBodyCssDev, prod: previewBodyCssProd } = getPreviewBodyBackgroundCss();

export default createGlobalStyle<{theme: any}>`
  @font-face {
    font-family: 'Nexa-Book';
    src: url(${nexafont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  body,
  h1, h2, h3, h4, h5, h6,
  input, button, select, textarea, p, span, div, label {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
    color: ${({ theme }) => `rgb(${theme.fontColor || '255, 255, 255'})`};
    
    /* Dev mode background */
    ${isDev ? previewBodyCssDev : previewBodyCssProd}

    ::-webkit-scrollbar {
      width: 2px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(${({ theme }) => theme.accentColor || '230, 205, 0'});
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgb(${({ theme }) => theme.accentColor || '230, 205, 0'});
    }
  }

  button {
    cursor: pointer;
    outline: 0;
  }
`;
