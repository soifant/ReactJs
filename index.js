import React from 'react';
import ReachDOM from 'react-dom/client';

const myFirstElement = <h1>Hallo word</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);