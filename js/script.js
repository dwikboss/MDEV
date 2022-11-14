"use strict";
//a = 1;  // This will cause an error (a is not defined).

console.log('TEST: link index.html and script.js');

var title = document.getElementById("title");

var nav_news = document.getElementById("nav_news");
var nav_flights = document.getElementById("nav_flights");
var nav_map = document.getElementById("nav_map");

var section_news = document.getElementById("section_news");
var section_flights = document.getElementById("section_flights");
var section_map = document.getElementById("section_map");

nav_news.addEventListener("click", handleNav);
nav_flights.addEventListener("click", handleNav);
nav_map.addEventListener("click", handleNav);

document.querySelectorAll(".btn-share").forEach(btn_share => 
	btn_share.addEventListener("click", handleShare)
)

function handleShare() {
	console.log(this.id);
}

function handleNav() {
	if (this.id == "nav_news") {
		section_news.style.display = "flex";
		section_flights.style.display = "none";
		section_map.style.display = "none";
		title.innerHTML = "updates";
	} else if (this.id == "nav_flights") {
		section_news.style.display = "none";
		section_flights.style.display = "flex";
		section_map.style.display = "none";
		title.innerHTML = "flights";
	} else if (this.id == "nav_map") {
		section_news.style.display = "none";
		section_flights.style.display = "none";
		section_map.style.display = "inline";
		section_map.style.height = "250px";
		title.innerHTML = "live location";
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

		var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
	});
}