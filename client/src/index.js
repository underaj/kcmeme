import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { apiGet, apiPost } from './helper.js';

ReactDOM.render(<App apiGet={apiGet} apiPost={apiPost} />, document.getElementById('app'));
