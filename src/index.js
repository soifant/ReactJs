import React from 'react';
import ReactDOM from 'react-dom/client';

function Lang(){
	return <h2> This a javascript language</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Lang />);