"use strict";
//a = 1;  // This will cause an error (a is not defined).

console.log('TEST: link index.html and script.js');

let title = document.getElementById("title");

let nav_news = document.getElementById("nav_news");
let nav_flights = document.getElementById("nav_flights");
let nav_map = document.getElementById("nav_map");

let section_news = document.getElementById("section_news");
let section_flights = document.getElementById("section_flights");
let section_map = document.getElementById("section_map");

const shareButtons = document.querySelectorAll(".share_btn");

for (var i = 0; i < shareButtons.length; i++) {
    shareButtons[i].addEventListener("click", function() {
		let newsTitle = document.getElementById(this.parentElement.id).getElementsByTagName("h2");
		let newsContent = document.getElementById(this.parentElement.id).getElementsByClassName("news__excerpt");

		const shareData = {
			title: newsTitle[0].innerText,
			text: newsContent[0].innerText,
		}

		handleShare(shareData);
    });
}

async function handleShare(data) {
	try {
		await navigator.share(data);
	} catch (err) {
		console.log(err);
	}
}

let apikey = "8d8172502a2569a7360a64e94889071f";

nav_news.addEventListener("click", handleNav);
nav_flights.addEventListener("click", handleNav);
nav_map.addEventListener("click", handleNav);

function handleNav() {
	if (this.id == "nav_news") {
		section_news.style.display = "flex";
		section_flights.style.display = "none";
		section_map.style.display = "none";
		title.innerHTML = "updates";

		nav_news.classList.add("active");
		nav_flights.classList.remove("active");
		nav_map.classList.remove("active");
	} else if (this.id == "nav_flights") {
		section_news.style.display = "none";
		section_flights.style.display = "flex";
		section_map.style.display = "none";
		title.innerHTML = "flights";
		
		nav_news.classList.remove("active");
		nav_flights.classList.add("active");
		nav_map.classList.remove("active");
	} else if (this.id == "nav_map") {
		section_news.style.display = "none";
		section_flights.style.display = "none";
		section_map.style.display = "flex";
		section_map.style.height = "250px";
		title.innerHTML = "home";

		nav_news.classList.remove("active");
		nav_flights.classList.remove("active");
		nav_map.classList.add("active");
	}
}

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register('sw.js').then(registration => {
		console.log(registration);
	}).catch(error => {
		console.log(error);
	});
}


let world_city = document.getElementById("city");
let world_degrees = document.getElementById("degrees");
let world_description = document.getElementById("description");
let world_tempMin = document.getElementById("temp_min");
let world_tempMax = document.getElementById("temp_max");
let big_degrees = document.getElementById("big-degrees");

if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition((position) => {
		let lat = position.coords.latitude;
		let long = position.coords.longitude;

		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apikey}`)
		.then(response => response.json())
		.then(data => {
			let cityValue = data['name'];
			let countryValue = data['sys']['country'];
			let degrees = data['main']['temp'];
			let description = data['weather'][0]['description'];
			let tempMin = data['main']['temp_min'];
			let tempMax = data['main']['temp_max'];

			world_city.innerHTML = cityValue + ", " + countryValue;
			world_degrees.innerHTML = Math.round(degrees) + "°";
			big_degrees.innerHTML = Math.round(degrees) + "°";
			world_description.innerHTML = description;
			world_tempMin.innerHTML = Math.round(tempMin) + "°";
			world_tempMax.innerHTML = Math.round(tempMax) + "°";
		});
	});
}

let date = new Date();
let hour = date.getHours();

let tod = document.getElementById("time-of-day");

if (hour < 12) {
	tod.innerText = 'good morning,';
} else if (hour < 18) {
	tod.innerText = 'good afternoon,';
} else {
	tod.innerText = 'good evening,';
}