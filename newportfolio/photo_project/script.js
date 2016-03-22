
// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
  itemSelector: '.grid-item',
  columnWidth: 150,
  gutter: 25
});

new AnimOnScroll( document.getElementById( 'grid' ), {
		minDuration : 0.4,
		maxDuration : 0.7,
		viewportFactor : 0.2
	} );
