import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterIndex from './router/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterIndex />, document.getElementById('root'));
registerServiceWorker();
