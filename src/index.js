import React from 'react';
import ReactDOM from 'react-dom/client';

const x = 5;
const element = (
<>
	<h2> Selamat datang </h2>
	<br/>
	<h1>Ini perkalian {x} x {x} = {x*x}</h1>
	<br/>
	<small> 
	Hasil perkalian 
	{(x) < 5 ? "lebih kecil" : "lebih besar"}
	{x}
	</small>
</>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);