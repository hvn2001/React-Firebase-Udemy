import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

require('./index.css');

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('content')
);
