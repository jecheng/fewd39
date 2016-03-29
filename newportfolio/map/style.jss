var cities = [
  // San Francisco
  {lat:37.757 , lng: -122.507 },
  // Los Angeles
  {lat:34.020 , lng: -118.692 },
  // New York
  {lat:40.759 , lng: -74.039 },
  // Boston
  {lat:42.313 , lng: -71.197},
  // Honolulu
  {lat:21.126 , lng: -158.025},
  // Chicago
  {lat:41.833 , lng: -88.013},
  // Taiwan, Japan
  {lat:25.085 , lng: 121.422},
  {lat:35.673 , lng: 139.569},
  // Italy
  {lat:41.909 , lng: 12.255 },
  {lat:43.844 , lng: 10.670 },
  {lat:43.706 , lng: 10.360 },
  {lat:45.453 , lng: 11.969 },

];

var markers = [];
var map;

function initMap(){
  map = new google.maps.Map(document.getElementById('map'),{
    zoom: 2,
    center: {lat:30.2272083 , lng: 11.128869 }
  });
}

function drop(){
  clearMarkers();
  for (var i = 0; i<cities.length;i++){
    addMarkerWithTimeout(cities[i],i*200);
  }
}

function addMarkerWithTimeout(position,timeout){
  window.setTimeout(function(){
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  },timeout);
}

function clearMarkers(){
  for(var i = 0; i<markers.length;i++){
    markers[i].setMap(null);
  }
  markers = [];
}
