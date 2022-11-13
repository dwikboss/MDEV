"use strict";
//a = 1;  // This will cause an error (a is not defined).

console.log('TEST: link index.html and script.js');

// nav
var nav_news = document.getElementById("nav_news");
var nav_flights = document.getElementById("nav_flights");
var nav_contact = document.getElementById("nav_contact");

var section_news = document.getElementById("section_news");
var section_flights = document.getElementById("section_flights");

nav_news.addEventListener("click", handleNav);
nav_flights.addEventListener("click", handleNav);
nav_contact.addEventListener("click", handleNav);

function handleNav() {
	if (this.id == "nav_news") {
		section_news.style.display = "flex";
		section_flights.style.display = "none";
	} else if (this.id == "nav_flights") {
		section_news.style.display = "none";
		section_flights.style.display = "flex";
	} else {
		console.log("333");
	}
}

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register('sw.js').then(registration => {
		console.log(registration);
	}).catch(error => {
		console.log(error);
	});
}

if ("geolocation" in navigator) {
	navigator.geolocation.watchPosition((position) => {
		console.log(position.coords.latitude, position.coords.longitude);
	});
}

if ("BarcodeDetector" in window ) {
	console.log('Barcode Detector supported!');
} else {
	console.log('not supported');
}