import React from 'react';
import ReactDOM from 'react-dom/client';

function Code(props){
	
	if(props.lang){
	
		return <h1> Your code is javacrpit</h1>;
	
	}
	
	return <h1> Your code not js</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Code lang='true'/>);