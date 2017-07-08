import {injectGlobal} from 'styled-components'

export default () => injectGlobal`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    font-size: 16px;
    line-height: 1;
    margin: 0;
    padding: 0;
  }

  a,
  button {
    transition: .3s;
    text-decoration: none;
    color: inherit;
    border: 0;
    background: none;
    cursor: pointer;
    outline: 0;
    -webkit-tap-highlight-color: transparent; /* might remove flickering */
    touch-action: manipulation;   /* just to be extra sure there is no 300ms delay */
  }
`
