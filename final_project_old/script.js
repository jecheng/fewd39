

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
  results["response"].forEach(display);
}
// 5) create the display function
function display(restaurant){
  // create the html elements needed to display on the document
  var div = document.createElement("div");
  var li = document.createElement("li");
  var a = document.createElement("a");

  // set restaurant name in document
  a.textContent = restaurant["name"];

  // set element attributes
  var url = restaurant["url"];
  a.setAttribute("href",url);
  a.setAttribute("target","_blank");

  // add CSS classes to elements
  li.classList.add("restaurant");
  div.classlist.add("restaurant-title");

  // append it to the parent to show the document
  div.appendChild(a);
  li.appendChild(div);
  document.querySelector("#restaurants").appendChild(li);
}
