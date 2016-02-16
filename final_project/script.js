




function DropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      return false;
    });

    obj.opts.on('click',function(){
      var opt = $(this);
      obj.val = opt.text();
      obj.index = opt.index();
      obj.placeholder.text('results: ' + obj.val);
    });
  },
  getValue : function() {
    return this.val;
  },
  getIndex : function() {
    return this.index;
  }
}

$(function() {

  var dd = new DropDown( $('#dd1') );
  var dd = new DropDown( $('#dd2') );
  var dd = new DropDown( $('#dd3') );

  $(document).click(function() {
    // all dropdowns
    $('.wrapper-dropdown-1').removeClass('active');
  });

});
// //jQuery is required to run this code
// $( document ).ready(function() {
//
//     scaleVideoContainer();
//
//     initBannerVideoSize('.video-container .poster img');
//     initBannerVideoSize('.video-container .filter');
//     initBannerVideoSize('.video-container video');
//
//     $(window).on('resize', function() {
//         scaleVideoContainer();
//         scaleBannerVideoSize('.video-container .poster img');
//         scaleBannerVideoSize('.video-container .filter');
//         scaleBannerVideoSize('.video-container video');
//     });
//
// });
//
// function scaleVideoContainer() {
//
//     var height = $(window).height() + 5;
//     var unitHeight = parseInt(height) + 'px';
//     $('.homepage-hero-module').css('height',unitHeight);
//
// }
//
// function initBannerVideoSize(element){
//
//     $(element).each(function(){
//         $(this).data('height', $(this).height());
//         $(this).data('width', $(this).width());
//     });
//
//     scaleBannerVideoSize(element);
//
// }
//
// function scaleBannerVideoSize(element){
//
//     var windowWidth = $(window).width(),
//     windowHeight = $(window).height() + 5,
//     videoWidth,
//     videoHeight;
//
//     console.log(windowHeight);
//
//     $(element).each(function(){
//         var videoAspectRatio = $(this).data('height')/$(this).data('width');
//
//         $(this).width(windowWidth);
//
//         if(windowWidth < 1000){
//             videoHeight = windowHeight;
//             videoWidth = videoHeight / videoAspectRatio;
//             $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
//
//             $(this).width(videoWidth).height(videoHeight);
//         }
//
//         $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
//
//     });
// }



// *********** dummy data *************
var results = [
        {
            "id": 1,
            "name": "Super Duper",
            "price": $,
            "location": {
                "lat": 37.7789365,
                "lng":-122.4059995
                },
           "neighborhood": "FIDI",
            "cuisine": ["Cheap Gourmet", "Quick Lunch", "Hipster"],
            "menu": "http://superduperburgers.com/"
        },
        {
          "id": 2,
          "name": "Cafe du Soleil",
          "price": $,
          "location": {
              "lat": 37.7791456,
              "lng":-122.406306
              },
           "neighborhood": "FIDI",
          "cuisine": ["Cheap Gourmet", "Quick Lunch", "Hipster"],
          "menu": "http://www.cafedusoleilsoma.com/"
        },
          {
          "id": 3,
          "name": "Roli Roti Gourmet Rotisserie",
          "price": $,
          "location": {
              "lat": 37.7956846,
              "lng":-122.3945147
              },
           "neighborhood": "FIDI",
          "cuisine": ["Cheap Gourmet", "Quick Lunch", "Hipster"],
          "menu": "http://www.roliroti.com/"
        }
    ]




// 1) put the form tag around the 3 dropdowns and grab the form tag
var form = document.querySelector("#dropdownValues");

// 2) create the variables for the input dropdown values
var dropdown1 = document.querySelector("#dd1");
var dropdown2 = document.querySelector("#dd2");
var dropdown3 = document.querySelector("#dd3");

// create a variable to capture all 3 dropdown values and set it to blank;
var all3DropdownValues=[];
// push the results of the three dropdowns into the variable that captures all 3 dropdowns so.....all3DropdownValues.push=(dropdown1,dropdown2,dropdown3)
var finalResults = all3DropdownValues.push(dropdown1,dropdown2,dropdown3);

// 3)add.EventListener("submit",function());
form.addEventListener("submit",formSubmitted)

// 4)write the formSubmitted function that collects all 3 values in the dropdown
function formSubmitted(event){
  // prevent default from happening
  event.preventDefault();

  // push the results of the three dropdowns into the variable that captures all 3 dropdowns
  all3DropdownValues.push(dropdown1,dropdown2,dropdown3);
  // get the data from all3DropdownValues and place in next function to run
  $.get(finalResults,restaurantResults);
}

// 4) Create the function that loops through the results

// store the results into a variable
var resultsArray = results;
function restaurantResults(results){
  // for each item in the array, you will place the restaurant into the display function
  resultsArray.forEach(display);
}

//5) create the display function that compares the 3 values of the dropdown to the dummy data
function display(restaurant){
  if (dropdown1 == results["cuisine"] && dropdown2 == results["neighborhood"] && dropdown3 == results["price"])
  {

            // create the display elements which is the name of the restaurants
            var h3 = document.createElement("h3");
            var restaurant = document.createElement("div");
            // set the text content to show restaurant name on my DOM
            var name = restaurant["name"];
            h3.textContent = name;
            // set attribute
            item.setAttribute("class","restaurant");
            restaurant.setAttribute("class","restaurant-title");

            // append it to the appropriate parent to show the DOM
            restaurant.appendChild(h3);


  }
  else
  {
            console.log("search again");
  };
}
