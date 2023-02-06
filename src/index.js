import React from 'react';
import ReactDOM from 'react-dom/client';

function Code(){
	
	const shoot = () => {
		alert('YOUR CODE IS JAVASCRPIT');
	}
	
	return (
		<button onClick = {shoot} > Take shoot </button>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Code />);