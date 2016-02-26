// 
//
// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 160
// })
var $grid = $('.grid').masonry({

});

$grid.imagesLoaded().progress(function(){
  $grid.masonry('layout');
});
