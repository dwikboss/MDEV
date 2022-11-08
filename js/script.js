"use strict";
//a = 1;  // This will cause an error (a is not defined).

console.log('TEST: link index.html and script.js');

if (navigator && navigator.serviceWorker) {
	navigator.serviceWorker.register('../sw.js');
}

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register('../sw.js').then(registration => {
		
	});
}

