import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import variables from './Variables';
import Manrope from '../fonts/Manrope.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Manrope';
  src: url(${Manrope}) format('woff2');
       
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  letter-spacing: 0.02857em;
  font-style: normal;
  color: ${variables.blackText};
  width: 100%;
  height: 100vh;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
}
html {
  scroll-behavior: smooth;
}
`;
