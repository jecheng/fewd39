	console.log('Sanity Check: script.js is working!');

	// Hard Coded JSON
	// ------------------------------------------------

	var films = [
	        {
	            "id": 1,
	            "title": "Marnie",
	            "year": 1964,
	            "location": {
	                "lat": 37.7737293,
	                "lng": -122.387741
	                },
	            "actors": ["Sean Connery", "Tippi Hedren", "Gary Oldman"],
	            "image": "http://the.hitchcock.zone/files/gallery/org/6589.jpg",
	            "production_company": "Universal Pictures",
	            "director": "Alfred Hitchcock"
	        },
	        {
	            "id": 2,
	            "title": "The Birds",
	            "year": 1963,
	            "location": {
	                "lat": 37.7873946,
	                "lng": -122.4104338
	                },
	            "actors": ["Evan Hunter", "Tippi Hedren", "Suzanne Pleshette"],
	            "image": "http://www.theimaginativeconservative.org/wp-content/uploads/2015/05/Tippi-Hedren.jpg",
	            "production_company": "Universal Pictures",
	            "director": "Alfred Hitchcock"
	        },
	        {
	            "id": 3,
	            "title": "Vertigo",
	            "year": 1958,
	            "location": {
	                "lat": 37.80228993,
	                "lng": -122.4509625
	                },
	            "actors": ["James Stewart", "Kim Novak", "Alec Coppel"],
	            "image": "http://ww2.kqed.org/news/wp-content/uploads/sites/10/2013/02/apartmentthen.jpg",
	            "production_company": "Alfred J. Hitchcock Productions",
	            "director": "Alfred Hitchcock"
	        },
	        {
	            "id": 4,
	            "title": "Family Plot",
	            "year": 1976,
	            "location": {
	                "lat": 37.7918345,
	                "lng": -122.4155322
	                },
	            "actors": ["Bruce Dern", "Ernest Lehman", "Barbara Harris"],
	            "image": "http://images6.fanpop.com/image/photos/33400000/Family-Plot-alfred-hitchcock-33469114-1280-800.jpg",
	            "production_company": "Universal Pictures",
	            "director": "Alfred Hitchcock"
	        }
	    ]

	// Setup
	// ------------------------------------------------
	var map;

	function initMap(){
		// get coordinates
		var coordinates = new google.maps.LatLng(37.7862082,-122.4000086);
		// get mapOptions
		var mapOptions = {
			center: coordinates,
			scrollwheel: false,
			// get zoom level
			zoom: 13
		};
		map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

		films.forEach(createMarker);
		films.forEach(createLine)
	}



	// Events
	// ------------------------------------------------
var filmList = document.querySelector('.film-list');



	// Functions
	// ------------------------------------------------

function createMarker(film){
	// console.log(film);
	var filmLocation = new google.maps.LatLng(film.location.lat,film.location.lng);
	console.log(filmLocation);
	var marker = new google.maps.Marker({
		position: filmLocation,
		map: map
	});
	createLine(film)
}

function createLine(film){
	console.log(film)
	var li = document.createElement('li');
	var h3 = document.createElement('h3');
	var h4 = document.createElement('h4');
	var h6 = document.createElement('h6');
	var img = document.createElement('img');

	li.classList.add('panel', 'panel-default');
	img.setAttribute('src', film.image);
	var filmTitle = film.title + ' ' + film.year;
	h3.textContent = filmTitle;

	var filmCompany = film.production_company;
	h4.textContent = filmCompany;

	li.appendChild(h3);
	li.appendChild(h4);
	li.appendChild(img);

	filmList.appendChild(li);

}
