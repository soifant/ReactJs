import {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Form(){

	conat [name, setName] = useState("");
	
	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Your name is ${name}`);
	}
	
	return(
		<form>
			<label> Enter your name here
				<input type='text'
				value = {name}
				onChange ={ (e) => setName(e.target.value)}
				/>
			</label>
			<input type="submit"/>
		</form>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);