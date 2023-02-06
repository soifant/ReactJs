import React from 'react';
import ReactDOM from 'react-dom/client';

function Lang(props){
	return <h3> Languange {props.lang} and framework {props.fm}</h3>;
}

function Code(){
	const lang = [
	
		{lang : 'javascript', fm : 'ReactJs'}, 
		{lang : 'php', fm : 'Laravel'}, 
		{lang : 'python', fm : 'Django'}
		
	];
	
	return (
		<>
			<h1> You write code with</h1>
			<ul>
				{lang.map((lang) => <Lang lang={lang.lang} Fm={lang.fm}/>)}
			</ul>
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Code />);