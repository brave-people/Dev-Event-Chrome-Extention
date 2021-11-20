/* eslint-disable import/no-import-module-exports */
import React from 'react';
import {render} from 'react-dom';

import Popup from './Popup.jsx';

render(<Popup />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
