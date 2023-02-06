import React from 'react';
import ReactDOM from 'react-dom/client';

function Lang(props){
	return <h3> Languange {props.lang}</h3>;
}

function Code(){
	const lang = ['javascript', 'php', 'nodrjs'];
	
	return (
		<>
			<h1> You can computer languange</h1>
			<ul>
				{lang.map((lang) => <Lang lang={lang}/>)}
			</ul>
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Code />);