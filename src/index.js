import React from 'react';
import ReactDOM from 'react-dom/client';

function Code(){
	
	const shoot = (a) => {
		alert(a);
	}
	
	return (
		<button onClick = {() => shoot("Your code write wwith javascript")} > Take shoot </button>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Code />);