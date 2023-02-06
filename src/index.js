import React from 'react';
import ReactDOM from 'react-dom/client';

function Lang(props){
	return <h2> This a {props.lang} language</h2>;
}

function Code(){
	return (
	<>
		<h1> What your favorite code</h1>
		<Lang lang="JavaScript"/>
	</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Code />);