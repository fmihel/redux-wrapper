import './template/style.scss';
import { DOM } from 'fmihel-browser-lib';
import React from 'react';
import ReacDOM from 'react-dom';
import App from 'components/App.jsx';

import { Provider } from 'react-redux';
import redux from './redux';
import './actions';

$(() => {
    ReacDOM.render(<Provider store={redux.store}> <App /></Provider>, DOM('#page'));
});
