

// 1) grab the form tag
var form = document.querySelector("#restaurant-search");
// 2) add listener for the submit click and make something happen
form.addEventListener("submit", formSubmitted);
// 3) create the "make something happen" function
function formSubmitted(event) {
  event.preventDefault();
  // create the variable for the input
  var query = document.querySelector("#query").value;
  // create the url that would contain the input
  var url = "https://api.foursquare.com/v2/venues/search?ll=37.7927898,-122.4098684&client_id=M4UHM4Q3PORZCXYXOYTM3W15B13A5TTJU30SMX4HOOYJJ142&client_secret=IT1WPZYJOSTDAB44UKUKSUWMUH2DO5ZCNNMTU2J1RAE13SXY&v=20160217&limit=5&query=" + query;
  // create the AJAX to call the url with the search that the user inputs in order to get the data and create the function
  $.get(url, restaurantResults);
}
// 4) create the function that stores the results and also loops the results. The loop is required in order to display all the results.
function restaurantResults(results){
  // // store the results into a variable
  // var restaurantArray = results["response"];
  // // create a loop inside the array
  results["response"]["venues"].forEach(display);
}
// 5) create the display function
function display(restaurant){
  // create the html elements needed to display on the document
  var item = document.createElement("li");
  var link = document.createElement("a");
  var title = document.createElement("div");

  // set restaurant name in document
  link.textContent = restaurant["name"];

  // set element attributes
  var url = restaurant["url"];
  link.setAttribute("href",url);
  link.setAttribute("target","_blank");

  // add CSS classes to elements
  item.classList.add(".restaurant");
  title.classList.add(".restaurantTitle");

  // append it to the parent to show the document
  title.appendChild(link);
  item.appendChild(title);
  document.querySelector("#restaurants").appendChild(item);
}
