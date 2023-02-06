import React from 'react';
import ReactDOM from 'react-dom/client';

const element = (
	<div>
		<h1>Ini adalah angka 1</h1>
		<br/>
		<h1>ini adalah perkalian {10 * 20} </h1>
		<br/>
		<small> Anda sudah menlihat keduanya</small>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);