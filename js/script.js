"use strict";
//a = 1;  // This will cause an error (a is not defined).

console.log('TEST: link index.html and script.js');

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register('../sw.js').then(registration => {
		console.log(registration);
	}).catch(error => {
		console.log(error);
	});
}

