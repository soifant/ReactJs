import React from 'react';
import ReactDOM from 'react-dom/client';

function Form(){

	return(
		<form>
			<label> Enter your name here
				<input type='text'/>
			</label>
		</form>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);