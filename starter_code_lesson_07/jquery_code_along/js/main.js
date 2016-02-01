/**
* Part 1 - Together:
*/

// 1. Remove the highlight class from #box2 (use the .removeClass() method)
$('#box2').removeClass('highlight');

// 2. Select the anchor within #box3. Change the HTML to 'jQuery!'
$('#box3').find('a').html('jQuery!');


// 3. Add the highlight class to the h3 when #box1 is clicked (use the .addClass() method)
$('#box1').on('click', function(){
 $('h3').addClass('highlight');
});

/**
* Part 1 - Now you try:
*/

// 1. Add the .highlight class to #box4 (use the .addClass() method)
$('#box4').addClass('highlight');

// 2. Make the text color of the strong tag within #box2 green (use the .css() method)

$('#box2').find('strong').css('color','green');

/**-----------------------------------------------------------------------------------------------*/


/**
*
* Part 2 - Together:
*
*/

// 1. When the anchor within #box3 is clicked
	// a) Slide toggle #box4
	// b) Fade out #box1 slowly
$('#box3 a').on('click', function () {
	$('#box4').slideToggle();
	$('#box1').fadeOut();
});



/**
*
* Part 2 - Now you try:
*
*/

// 1. When the h2 is clicked on
	// a) Slide up the h2
	// b) Add the snazzy class to the h1

$('h2').on('click',function(){
	$('h2').slideUp();
	$('h1').addClass('snazzy')
});
