/* eslint-disable import/no-import-module-exports */
import React from 'react';
import {render} from 'react-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

import Popup from './Popup.jsx';

render(
  <ThemeProvider theme={theme}>
    <Popup />
    <GlobalStyles />
  </ThemeProvider>,
  window.document.querySelector('#app-container'),
);

if (module.hot) module.hot.accept();
