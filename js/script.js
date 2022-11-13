"use strict";
//a = 1;  // This will cause an error (a is not defined).

console.log('TEST: link index.html and script.js');

// nav
var nav_news = document.getElementById("nav_news");
var nav_music = document.getElementById("nav_music");
var nav_map = document.getElementById("nav_map");

var news_section = document.getElementById("news_section");
var show_section = document.getElementById("show_section");

nav_news.addEventListener("click", handleNav);
nav_music.addEventListener("click", handleNav);
nav_map.addEventListener("click", handleNav);

function handleNav() {
	if (this.id == "nav_news") {
		news_section.style.display = "flex";
		show_section.style.display = "none";
	} else if (this.id == "nav_music") {
		news_section.style.display = "none";
		show_section.style.display = "flex";
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