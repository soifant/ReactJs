import React from 'react';
import ReactDOM from 'react-dom/client';

function Lang(props){
	return <h2> This a {props.lang} language</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Lang lang="nodeJs"/>);