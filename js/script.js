"use strict";
//a = 1;  // This will cause an error (a is not defined).

console.log('TEST: link index.html and script.js');


var title = document.getElementById("title");

var nav_news = document.getElementById("nav_news");
var nav_flights = document.getElementById("nav_flights");
var nav_contact = document.getElementById("nav_contact");

var upgrade_1 = document.getElementById("card_1_upgrade");
var card_2 = document.getElementById("card_2");
var card_3 = document.getElementById("card_3");

var section_news = document.getElementById("section_news");
var section_flights = document.getElementById("section_flights");

nav_news.addEventListener("click", handleNav);
nav_flights.addEventListener("click", handleNav);
nav_contact.addEventListener("click", handleNav);

upgrade_1.addEventListener("click", handleUpgrade);

function handleUpgrade() {
	console.log(this.id);
}

function handleNav() {
	if (this.id == "nav_news") {
		section_news.style.display = "flex";
		section_flights.style.display = "none";
		title.innerHTML = "updates";
	} else if (this.id == "nav_flights") {
		section_news.style.display = "none";
		section_flights.style.display = "flex";;
		title.innerHTML = "flights";
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