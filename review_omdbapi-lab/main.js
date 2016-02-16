// grab the form tag
var form = document.querySelector("#movie-search-form")
// add listener for the submit click and make something happen
form.addEventListener("submit",formSubmitted)
//
// create the "make something happen" function
function formSubmitted(event){
  // prevent default from happening
  event.preventDefault();
  // create the variable for the input
  var query = document.querySelector("#query");
  // create the url that would contain the input
  var url = "http://www.omdbapi.com/?s="+query.value;
  // get the data from the url and place in next function to run
  $.get(url, movieResults);
}

function movieResults(results){
  // store the results into a variable
  var movieArray = results.Search;
  // for each item in the array, you will place that one item into the displayMovie function which we haven't defined yet
  movieArray.forEach();
}

function displayMovie(movie){
  //  create four elements
  var item = document.createElement("li");
  var movie = document.createElement("div");
  var link = document.createElement("a");
  var release = document.createElement("div");
// set text content to show Title and Release Date on my DOM
  var name = movie["Title"];
  link.textContent = name;
  var year = movie["Year"];
  release.textContent = year;

  // set attributes such as classes, href, target on my newly created elemtns
  item.setAttribute("class","movie");
  movie.setAttribute("class","movie-title");
  release.setAttribute("class","movie-release-date");

  var urlIMDB = "http://www.imdb.com/title/"+movie[imdbID];
  link.setAttribute("href",url);
  link.setAttribute("target","_blank");

  // append it to the appropriate parent to show the DOM
  item.appendChild(movie);
  item.appendChild(release);
  movie.appendChild(link);
  // grab the parent
  var ul = document.querySelector("#movies");
  ul.appendChild(item);

}
